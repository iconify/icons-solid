import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z1kvdcbpg.css';
import '../../css/f/fdsna2deo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z1kvdcbpg"/><path class="fdsna2deo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-arrow-right-exit"} {...others} />);
}

export default Component;
