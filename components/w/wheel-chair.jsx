import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rgxtr7_5k.css';
import '../../css/f/fcnpq4b5e.css';
import '../../css/a/a4ixidv6h.css';

const viewBox = {"width":17,"height":17};
const content = `<g transform="translate(2 1)" class="n1lsf0bnc"><ellipse class="rgxtr7_5k"/><path class="fcnpq4b5e"/><path class="a4ixidv6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:wheel-chair"} {...others} />);
}

export default Component;
