import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k9f8q7bhr.css';
import '../../css/m/mmwpt_bdl.css';
import '../../css/i/ihwb4pbpt.css';
import '../../css/b/b93ex876r.css';
import '../../css/p/p37n0ibjs.css';
import '../../css/k/kiyzt525r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="k9f8q7bhr wm-shadow"/><path class="mmwpt_bdl"/><path class="ihwb4pbpt"/><path class="b93ex876r"/><path class="p37n0ibjs wm-shine"/><path class="kiyzt525r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:archive-restore"} {...others} />);
}

export default Component;
