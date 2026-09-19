import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gvx5yo47i.css';
import '../../css/u/uu34kkzdm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="gvx5yo47i"/><path class="uu34kkzdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-4"} {...others} />);
}

export default Component;
