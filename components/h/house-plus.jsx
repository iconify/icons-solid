import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vbp9e9bha.css';
import '../../css/y/yuh54r8ru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vbp9e9bha"/><path class="yuh54r8ru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:house-plus"} {...others} />);
}

export default Component;
