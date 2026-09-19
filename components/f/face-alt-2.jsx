import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qilianfni.css';
import '../../css/f/f92imi9ay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qilianfni"/><path class="f92imi9ay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:face-alt-2"} {...others} />);
}

export default Component;
