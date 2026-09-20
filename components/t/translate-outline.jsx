import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k97f4fb0h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k97f4fb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:translate-outline"} {...others} />);
}

export default Component;
