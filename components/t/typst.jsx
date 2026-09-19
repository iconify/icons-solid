import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/soojombro.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="soojombro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:typst"} {...others} />);
}

export default Component;
