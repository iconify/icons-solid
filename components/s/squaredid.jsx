import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pld9fvbkz.css';
import '../../css/u/uvhrn1bbw.css';
import '../../css/n/nfquxfbmi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pld9fvbkz"/><path class="uvhrn1bbw"/><path class="nfquxfbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:squaredid"} {...others} />);
}

export default Component;
