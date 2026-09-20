import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvb-mac4l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qvb-mac4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ruler-pen4-filled"} {...others} />);
}

export default Component;
