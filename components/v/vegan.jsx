import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qxszeo4ga.css';
import '../../css/f/f7299m29s.css';
import '../../css/s/s7z5qybuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qxszeo4ga"/><path class="f7299m29s"/><path class="s7z5qybuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:vegan"} {...others} />);
}

export default Component;
