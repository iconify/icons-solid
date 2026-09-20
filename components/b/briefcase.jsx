import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hk8_rhbyh.css';
import '../../css/c/cx5_hlbox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hk8_rhbyh"/><rect class="cx5_hlbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:briefcase"} {...others} />);
}

export default Component;
