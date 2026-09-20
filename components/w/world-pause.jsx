import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g-_vthbqy.css';
import '../../css/i/ivo0b9i9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g-_vthbqy"/><path class="ivo0b9i9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-pause"} {...others} />);
}

export default Component;
