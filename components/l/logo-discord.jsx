import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ces_7v8dp.css';
import '../../css/k/khz-3ib7b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ces_7v8dp"/><path class="khz-3ib7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-discord"} {...others} />);
}

export default Component;
