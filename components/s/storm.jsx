import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vxo3gieyf.css';
import '../../css/n/nkl72kbds.css';
import '../../css/s/s6hayrb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vxo3gieyf"/><path class="nkl72kbds"/><path class="s6hayrb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:storm"} {...others} />);
}

export default Component;
