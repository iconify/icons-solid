import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fyho5nbbm.css';
import '../../css/c/c8unxfukj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fyho5nbbm"/><path class="c8unxfukj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-dollar"} {...others} />);
}

export default Component;
