import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/slcgv9bsj.css';
import '../../css/a/a814_vg9v.css';
import '../../css/j/jk7xkwbum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="slcgv9bsj"/><path class="a814_vg9v"/><path class="jk7xkwbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:chart-bar-big-duotone"} {...others} />);
}

export default Component;
