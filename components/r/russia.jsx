import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic98o8bay.css';
import '../../css/w/wprsklb5k.css';
import '../../css/o/owe3-0brr.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ic98o8bay"/><path class="wprsklb5k"/><path class="owe3-0brr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:russia"} {...others} />);
}

export default Component;
