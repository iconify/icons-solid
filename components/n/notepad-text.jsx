import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mi-mpqbpu.css';
import '../../css/i/il17kbbxg.css';
import '../../css/e/ehq3u9bfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mi-mpqbpu"/><rect class="il17kbbxg"/><path class="ehq3u9bfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:notepad-text"} {...others} />);
}

export default Component;
