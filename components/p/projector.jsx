import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fdi_jzrrc.css';
import '../../css/n/nikb2w8-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fdi_jzrrc"/><path class="nikb2w8-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:projector"} {...others} />);
}

export default Component;
