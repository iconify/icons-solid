import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cka-s8b3p.css';
import '../../css/h/he65uacuo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cka-s8b3p"/><path class="he65uacuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-dashed-square-top-right-duocolor-round"} {...others} />);
}

export default Component;
