import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z-q5zv9jg.css';
import '../../css/u/u2v_hebgr.css';
import '../../css/n/nuyj-1d-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z-q5zv9jg"/><circle class="u2v_hebgr"/><path class="nuyj-1d-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:snail"} {...others} />);
}

export default Component;
