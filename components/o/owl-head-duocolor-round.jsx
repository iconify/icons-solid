import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zrr72d-pi.css';
import '../../css/e/eo5pniblk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zrr72d-pi"/><path class="eo5pniblk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:owl-head-duocolor-round"} {...others} />);
}

export default Component;
