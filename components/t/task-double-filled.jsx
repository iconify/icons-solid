import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz17-3m3v.css';
import '../../css/q/q3_f8s1ue.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gz17-3m3v"/><path class="q3_f8s1ue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-double-filled"} {...others} />);
}

export default Component;
