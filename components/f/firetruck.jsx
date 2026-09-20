import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i9rz4zb0i.css';
import '../../css/e/ev-9ptzbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i9rz4zb0i"/><path class="ev-9ptzbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:firetruck"} {...others} />);
}

export default Component;
