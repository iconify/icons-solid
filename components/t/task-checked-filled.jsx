import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_hxwwbci.css';
import '../../css/g/gmkakaclc.css';
import '../../css/p/p0w709btd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_hxwwbci"/><path class="gmkakaclc"/><path class="p0w709btd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-checked-filled"} {...others} />);
}

export default Component;
