import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_09tab4h.css';
import '../../css/c/c807_0blv.css';
import '../../css/n/ns1f0lben.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b_09tab4h"/><path class="c807_0blv"/><path class="ns1f0lben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:viva-engage-logo"} {...others} />);
}

export default Component;
