import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux3o_f6vg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ux3o_f6vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:drawio"} {...others} />);
}

export default Component;
