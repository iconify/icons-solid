import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9o6g8dcv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="v9o6g8dcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:volume-mute-filled"} {...others} />);
}

export default Component;
