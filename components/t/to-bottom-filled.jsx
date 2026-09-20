import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6lc9g5bl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y6lc9g5bl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:to-bottom-filled"} {...others} />);
}

export default Component;
