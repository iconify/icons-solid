import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vg1y9gbnc.css';
import '../../css/h/hvvu1cbma.css';
import '../../css/x/xx_uqofyb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="vg1y9gbnc"/><path class="hvvu1cbma"/><path class="xx_uqofyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:image-location"} {...others} />);
}

export default Component;
