import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/torn53bpn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="torn53bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:java-class-sealed"} {...others} />);
}

export default Component;
