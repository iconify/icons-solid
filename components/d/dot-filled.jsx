import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3p6w_dsx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="w3p6w_dsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:dot-filled"} {...others} />);
}

export default Component;
