import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zq2yh0ibb.css';
import '../../css/o/ogjfb0b2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zq2yh0ibb"/><path class="ogjfb0b2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:chart-line"} {...others} />);
}

export default Component;
