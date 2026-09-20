import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m4czh3vxz.css';
import '../../css/i/i_kpawtqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m4czh3vxz"/><rect class="i_kpawtqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mail"} {...others} />);
}

export default Component;
