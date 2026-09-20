import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xni24ebau.css';
import '../../css/e/emg8bu5vo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xni24ebau"/><path class="emg8bu5vo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:meshcore"} {...others} />);
}

export default Component;
