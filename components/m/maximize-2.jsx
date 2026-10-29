import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v-ihp8paj.css';
import '../../css/s/snpktvbyo.css';
import '../../css/k/kyczljbsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v-ihp8paj"/><path class="snpktvbyo"/><path class="kyczljbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:maximize-2"} {...others} />);
}

export default Component;
