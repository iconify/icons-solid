import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzijzmb3g.css';
import '../../css/f/f4puwd7ni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fzijzmb3g"/><path class="f4puwd7ni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:box-model-2-off"} {...others} />);
}

export default Component;
