import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zq2yh0ibb.css';
import '../../css/h/h1cbp4u0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zq2yh0ibb"/><path class="h1cbp4u0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:chart-line"} {...others} />);
}

export default Component;
