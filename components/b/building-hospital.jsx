import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cvaqi2bvd.css';
import '../../css/p/pgr-xub5d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="cvaqi2bvd"/><path class="pgr-xub5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-hospital"} {...others} />);
}

export default Component;
