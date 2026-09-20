import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zyx3w2ekd.css';
import '../../css/t/tzjobtbgu.css';
import '../../css/a/ar-9lob7c.css';
import '../../css/m/mcf-4tb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="zyx3w2ekd"/><path class="tzjobtbgu"/><path class="ar-9lob7c"/><path class="mcf-4tb9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cursor-arrow-target"} {...others} />);
}

export default Component;
