import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdggcu0gw.css';
import '../../css/s/sljodwyif.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rdggcu0gw"/><path class="sljodwyif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:huff"} {...others} />);
}

export default Component;
