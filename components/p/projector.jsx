import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/td1-22b0d.css';
import '../../css/l/la2i_0usa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="td1-22b0d"/><path class="la2i_0usa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:projector"} {...others} />);
}

export default Component;
