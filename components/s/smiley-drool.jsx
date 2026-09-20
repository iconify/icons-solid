import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jkd34csuc.css';
import '../../css/w/wy61nkyxp.css';
import '../../css/q/qqyvi1dwg.css';
import '../../css/h/h_cm8pmfh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="jkd34csuc"/><path class="wy61nkyxp"/><path class="qqyvi1dwg"/><path class="h_cm8pmfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:smiley-drool"} {...others} />);
}

export default Component;
