import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8zyk_juu.css';
import '../../css/r/rh_8cbdbx.css';
import '../../css/w/wcr2m1pdr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e8zyk_juu"/><path class="rh_8cbdbx"/><path class="wcr2m1pdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ammeter-20"} {...others} />);
}

export default Component;
