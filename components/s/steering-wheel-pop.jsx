import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/z/ztoe1lbpt.css';
import '../../css/v/vwb1p4b1a.css';
import '../../css/k/kuwf84bwp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="ztoe1lbpt"/><path class="vwb1p4b1a"/><path class="kuwf84bwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:steering-wheel-pop"} {...others} />);
}

export default Component;
