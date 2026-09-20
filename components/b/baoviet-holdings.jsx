import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/f/f53-e7bmf.css';
import '../../css/b/buoov3b6c.css';
import '../../css/m/md021-s7v.css';

const viewBox = {"width":1454,"height":1460};
const content = `<defs><radialGradient id="SVGcRaTnbUE" cx="0" cy="0" r="1" gradientTransform="translate(582.449 501.978)scale(929.086)" href="#SVG1mG4IbVQ"><stop class="vc--wpv5i"/><stop offset=".5" class="f53-e7bmf"/><stop offset="1" class="buoov3b6c"/></radialGradient><linearGradient id="SVG1mG4IbVQ" gradientUnits="userSpaceOnUse"/></defs><path fill="url(#SVGcRaTnbUE)" class="md021-s7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:baoviet-holdings"} {...others} />);
}

export default Component;
