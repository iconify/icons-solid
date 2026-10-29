import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pbq7azboz.css';
import '../../css/m/mlcsbebpq.css';
import '../../css/g/gv-805vfg.css';
import '../../css/o/o8rrh9b1q.css';
import '../../css/t/ty6d42mmb.css';
import '../../css/x/x-_dfqb1t.css';
import '../../css/d/d6_rhcbii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pbq7azboz wm-shadow"/><path class="mlcsbebpq wm-shadow"/><path class="gv-805vfg"/><path class="o8rrh9b1q"/><path class="ty6d42mmb"/><path class="x-_dfqb1t"/><path class="d6_rhcbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:tag"} {...others} />);
}

export default Component;
