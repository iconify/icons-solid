import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y__9fy_8j.css';
import '../../css/m/m6ua28bus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y__9fy_8j"/><path class="m6ua28bus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket"} {...others} />);
}

export default Component;
