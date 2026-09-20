import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1_ko4blm.css';
import '../../css/x/xqqc18b0h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j1_ko4blm"/><path clip-rule="evenodd" class="xqqc18b0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:coin-16"} {...others} />);
}

export default Component;
