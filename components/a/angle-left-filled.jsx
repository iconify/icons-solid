import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn-4l5o8k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sn-4l5o8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:angle-left-filled"} {...others} />);
}

export default Component;
