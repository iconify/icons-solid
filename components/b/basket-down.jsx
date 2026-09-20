import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m1gws7byp.css';
import '../../css/l/ln-0i0bou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m1gws7byp"/><path class="ln-0i0bou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-down"} {...others} />);
}

export default Component;
