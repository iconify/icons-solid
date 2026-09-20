import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u_yk9hb_v.css';
import '../../css/t/tga4nsf7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u_yk9hb_v"/><path class="tga4nsf7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:corner-up-left"} {...others} />);
}

export default Component;
