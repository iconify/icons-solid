import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zz0atbcvl.css';
import '../../css/g/g81mwabxo.css';
import '../../css/w/wzfpgk8qg.css';

const viewBox = {"width":201,"height":170};
const content = `<g class="ft5dv1b6b"><path class="zz0atbcvl"/><path class="g81mwabxo"/><path class="wzfpgk8qg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:turso-dark"} {...others} />);
}

export default Component;
