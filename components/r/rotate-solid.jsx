import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cu_0w0bkj.css';
import '../../css/x/xe9z6ccpt.css';
import '../../css/v/vbyvm5v7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cu_0w0bkj"/><path class="xe9z6ccpt"/><path class="vbyvm5v7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:rotate-solid"} {...others} />);
}

export default Component;
