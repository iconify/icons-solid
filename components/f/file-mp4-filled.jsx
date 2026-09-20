import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_y7o7b0e.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="t_y7o7b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:file-mp4-filled"} {...others} />);
}

export default Component;
