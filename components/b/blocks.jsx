import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/c20pm8yit.css';
import '../../css/y/yfcmbwbvg.css';
import '../../css/c/cfp4t-bfv.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="c20pm8yit"/><path class="wm-shine yfcmbwbvg"/><path class="cfp4t-bfv"/><path class="klzcy0ogc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:blocks"} {...others} />);
}

export default Component;
