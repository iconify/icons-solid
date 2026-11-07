import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffpdv241p.css';
import '../../css/g/gk_jpucvn.css';
import '../../css/a/ayh926r5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ffpdv241p"/><path class="gk_jpucvn"/><path class="ayh926r5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tag-price-bold-duotone"} {...others} />);
}

export default Component;
