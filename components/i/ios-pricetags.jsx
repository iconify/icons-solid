import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f832m7bua.css';
import '../../css/e/e5rlcgb_v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f832m7bua"/><path class="e5rlcgb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-pricetags"} {...others} />);
}

export default Component;
