import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erx8w3len.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bolt-outline"><path class="(Stroke) 85 Vector erx8w3len" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:bolt-outline"} {...others} />);
}

export default Component;
