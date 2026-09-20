import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0r4fir6h.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="b0r4fir6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-settings-2"} {...others} />);
}

export default Component;
