import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q42bmpxxd.css';
import '../../css/c/cbe2i_bnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q42bmpxxd"/><path class="cbe2i_bnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cloud-check"} {...others} />);
}

export default Component;
