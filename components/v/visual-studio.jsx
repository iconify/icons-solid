import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8kq6umwr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v8kq6umwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:visual-studio"} {...others} />);
}

export default Component;
