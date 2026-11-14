import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/epf41k61m.css';
import '../../css/j/j_x2ft9pl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="epf41k61m"/><path class="j_x2ft9pl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:volume"} {...others} />);
}

export default Component;
