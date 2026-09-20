import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1wd-4xhl.css';
import '../../css/b/bkrbpbclo.css';
import '../../css/m/mtyemfz0d.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGkBjdIdNv" x1="512.012" x2=".012" y1="568.012" y2="1080.012" gradientTransform="translate(0 -568)" gradientUnits="userSpaceOnUse"><stop offset=".232" class="b1wd-4xhl"/><stop offset=".802" class="bkrbpbclo"/></linearGradient><path fill="url(#SVGkBjdIdNv)" class="mtyemfz0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:novu"} {...others} />);
}

export default Component;
