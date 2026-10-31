import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uzr-ndbly.css';
import '../../css/z/zlmaezbcj.css';
import '../../css/b/bhtlebz9h.css';
import '../../css/t/tfc3--e7d.css';
import '../../css/h/h6yxyvxcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uzr-ndbly wm-shadow"/><path class="wm-shadow zlmaezbcj"/><path class="bhtlebz9h"/><path class="tfc3--e7d"/><path class="h6yxyvxcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:footprints"} {...others} />);
}

export default Component;
