import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea9jj1p6e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ea9jj1p6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-arrow-left"} {...others} />);
}

export default Component;
