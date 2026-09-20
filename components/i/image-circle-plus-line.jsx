import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hwdchkbtm.css';
import '../../css/z/zs18szner.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hwdchkbtm"/><path class="zs18szner"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:image-circle-plus-line"} {...others} />);
}

export default Component;
