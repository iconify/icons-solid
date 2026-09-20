import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzijzmb3g.css';
import '../../css/w/wstek7eqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fzijzmb3g"/><path class="wstek7eqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:graph-off"} {...others} />);
}

export default Component;
