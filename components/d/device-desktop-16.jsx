import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aaum-2bfi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aaum-2bfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:device-desktop-16"} {...others} />);
}

export default Component;
