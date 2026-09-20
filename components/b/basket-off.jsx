import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w1bvlmjth.css';
import '../../css/s/sqy_msyep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w1bvlmjth"/><path class="sqy_msyep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-off"} {...others} />);
}

export default Component;
