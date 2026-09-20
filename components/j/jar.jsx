import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/g/g8ry9_bxg.css';
import '../../css/a/a5bpzmben.css';
import '../../css/b/b1bl91b1w.css';
import '../../css/j/jlltowbwv.css';
import '../../css/s/ssxce1dcc.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/y/yz1cldndl.css';
import '../../css/o/o8y56tr-r.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="n1mjunbsu"><path class="g8ry9_bxg"/><path class="a5bpzmben"/></g><path class="b1bl91b1w"/><path class="jlltowbwv"/><path class="ssxce1dcc"/><g class="brzn_0bpr"><path class="yz1cldndl"/><path class="o8y56tr-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:jar"} {...others} />);
}

export default Component;
