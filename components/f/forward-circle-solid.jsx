import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsomq0bpp.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="vsomq0bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:forward-circle-solid"} {...others} />);
}

export default Component;
