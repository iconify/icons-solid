import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umbtk6blu.css';
import '../../css/i/ign-fos0g.css';
import '../../css/c/c90rkqbqs.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGIcpZcT2g" x1="-544.697" x2="-427.784" y1="677.626" y2="677.626" gradientTransform="matrix(4.3793 0 0 -4.3793 2385.4 3223.53)" gradientUnits="userSpaceOnUse"><stop offset="0" class="umbtk6blu"/><stop offset="1" class="ign-fos0g"/></linearGradient><path fill="url(#SVGIcpZcT2g)" class="c90rkqbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cooler-control"} {...others} />);
}

export default Component;
