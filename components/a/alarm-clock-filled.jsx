import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg84ptbsf.css';
import '../../css/t/tl712yvzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gg84ptbsf"/><path class="tl712yvzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:alarm-clock-filled"} {...others} />);
}

export default Component;
