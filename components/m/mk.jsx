import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvaqk2etf.css';
import '../../css/j/jib11hzqb.css';
import '../../css/o/o-q_u7cjd.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="qvaqk2etf"/><path class="jib11hzqb"/><circle class="o-q_u7cjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mk"} {...others} />);
}

export default Component;
