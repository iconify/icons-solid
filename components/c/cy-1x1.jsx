import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erzf03bmv.css';
import '../../css/k/kz-4aygch.css';
import '../../css/t/t3nixybku.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="erzf03bmv"/><path id="SVGhAjJQcsI" class="kz-4aygch"/><use width="100%" height="100%" href="#SVGhAjJQcsI" transform="matrix(-1 0 0 1 462.7 0)"/><path class="t3nixybku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cy-1x1"} {...others} />);
}

export default Component;
