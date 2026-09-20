import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n77s3abja.css';
import '../../css/g/gy2a-_b-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n77s3abja"/><path class="gy2a-_b-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:baby-boy-duotone"} {...others} />);
}

export default Component;
