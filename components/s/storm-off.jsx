import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhh5a0bgb.css';
import '../../css/n/new3wno1d.css';
import '../../css/d/dey5j6o-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jhh5a0bgb"/><path class="new3wno1d"/><path class="dey5j6o-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:storm-off"} {...others} />);
}

export default Component;
