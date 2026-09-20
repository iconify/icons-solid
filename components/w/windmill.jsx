import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wsvq0zbnl.css';
import '../../css/b/b3vy92-9d.css';
import '../../css/r/rkz625whc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="wsvq0zbnl"/><path class="b3vy92-9d"/><path class="rkz625whc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:windmill"} {...others} />);
}

export default Component;
