import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy7o6izzq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zy7o6izzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:crystal"} {...others} />);
}

export default Component;
