import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/frhosgbmg.css';
import '../../css/m/mgu37yb1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="frhosgbmg"/><path class="mgu37yb1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:briefcase-plus"} {...others} />);
}

export default Component;
