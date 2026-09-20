import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hpvmohrdg.css';
import '../../css/k/k4tuz2b5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hpvmohrdg"/><path class="k4tuz2b5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:terminal-cursor-fill"} {...others} />);
}

export default Component;
