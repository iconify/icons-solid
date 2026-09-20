import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6ix1cbtr.css';
import '../../css/l/lxcfl0bel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h6ix1cbtr"/><path class="lxcfl0bel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-minus"} {...others} />);
}

export default Component;
