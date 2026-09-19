import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0q32_b2b.css';
import '../../css/d/dzv7sjbhb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m0q32_b2b"/><path class="dzv7sjbhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:rokit"} {...others} />);
}

export default Component;
