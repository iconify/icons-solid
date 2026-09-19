import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvrzt5bkz.css';
import '../../css/f/fdvvb9b3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvrzt5bkz"/><path class="fdvvb9b3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:microphone-big-filled"} {...others} />);
}

export default Component;
