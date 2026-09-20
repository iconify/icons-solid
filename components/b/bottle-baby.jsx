import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vk01mjbvz.css';
import '../../css/z/zh7uc13jj.css';
import '../../css/l/ls6ioyvmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vk01mjbvz"/><path class="zh7uc13jj"/><path class="ls6ioyvmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bottle-baby"} {...others} />);
}

export default Component;
