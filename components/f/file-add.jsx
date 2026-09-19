import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lnb_ebbzb.css';
import '../../css/g/gt8eqgjgu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="lnb_ebbzb"/><path class="gt8eqgjgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:file-add"} {...others} />);
}

export default Component;
