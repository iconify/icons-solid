import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_i-7bb7z.css';
import '../../css/o/o3283cgee.css';
import '../../css/k/kjo9alciz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v_i-7bb7z"/><path class="o3283cgee"/><path class="kjo9alciz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-wave-outline"} {...others} />);
}

export default Component;
