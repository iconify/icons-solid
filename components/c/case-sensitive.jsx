import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dhidlu9he.css';
import '../../css/w/wflpuhb6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dhidlu9he"/><circle class="wflpuhb6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:case-sensitive"} {...others} />);
}

export default Component;
