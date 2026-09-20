import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmkrp6p4l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mmkrp6p4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:crop2-filled"} {...others} />);
}

export default Component;
