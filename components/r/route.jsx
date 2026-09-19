import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gjdc2nvab.css';
import '../../css/w/wb4hhokrb.css';
import '../../css/e/esa11jb9o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="gjdc2nvab"/><path class="wb4hhokrb"/><path class="esa11jb9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:route"} {...others} />);
}

export default Component;
