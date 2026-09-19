import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eth3w7x-t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eth3w7x-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-xing-outline"} {...others} />);
}

export default Component;
