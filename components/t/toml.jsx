import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep4mgw3nd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ep4mgw3nd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:toml"} {...others} />);
}

export default Component;
