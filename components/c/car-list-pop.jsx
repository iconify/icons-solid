import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4ui9xrgk.css';
import '../../css/n/n19r9zbjo.css';
import '../../css/m/m-mkpzb9n.css';
import '../../css/k/km99u6bof.css';
import '../../css/r/rwc1tibnv.css';
import '../../css/m/m4nf8n8gm.css';
import '../../css/p/pjgcaubuh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k4ui9xrgk"/><path class="n19r9zbjo"/><path class="m-mkpzb9n"/><path class="km99u6bof"/><path clip-rule="evenodd" class="rwc1tibnv"/><path class="m4nf8n8gm"/><path class="pjgcaubuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:car-list-pop"} {...others} />);
}

export default Component;
