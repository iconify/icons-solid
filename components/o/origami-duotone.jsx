import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spc8l1bte.css';
import '../../css/j/j4y0ffqca.css';
import '../../css/f/fg6r96b-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="spc8l1bte"/><path class="j4y0ffqca"/><path class="fg6r96b-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:origami-duotone"} {...others} />);
}

export default Component;
