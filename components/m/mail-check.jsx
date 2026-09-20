import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mbz4duvjr.css';
import '../../css/s/srdb7dgqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mbz4duvjr"/><path class="srdb7dgqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mail-check"} {...others} />);
}

export default Component;
