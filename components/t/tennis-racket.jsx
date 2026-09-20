import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t_ut08bvk.css';
import '../../css/w/wz8qjkb2i.css';
import '../../css/o/o1u583b9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t_ut08bvk"/><path class="wz8qjkb2i"/><circle class="o1u583b9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:tennis-racket"} {...others} />);
}

export default Component;
