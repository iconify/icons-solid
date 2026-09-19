import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ae3506h7l.css';
import '../../css/l/lgfkdnbmi.css';
import '../../css/y/yduk_kccx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="ae3506h7l"/><path class="lgfkdnbmi"/><path class="yduk_kccx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:gift-card"} {...others} />);
}

export default Component;
