import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgkl83cth.css';

const viewBox = {"width":447,"height":512};
const content = `<path class="wgkl83cth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:scrutinizer"} {...others} />);
}

export default Component;
