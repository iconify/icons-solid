import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jijs-abeb.css';
import '../../css/d/dfk32absk.css';
import '../../css/k/k7byg-byb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="jijs-abeb"/><path class="dfk32absk"/><path class="k7byg-byb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:unlock"} {...others} />);
}

export default Component;
