import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/t/tufdhzbwd.css';
import '../../css/r/r-ud0xybx.css';
import '../../css/d/drt7lkbor.css';
import '../../css/w/w0aobzb8g.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGOxAULdLC" class="i7sr6ubzr"/></defs><use href="#SVGOxAULdLC"/><use href="#SVGOxAULdLC"/><path class="tufdhzbwd"/><path class="r-ud0xybx"/><path class="drt7lkbor"/><path class="w0aobzb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:web-risk"} {...others} />);
}

export default Component;
