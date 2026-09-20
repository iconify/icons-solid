import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p1w4uvj5m.css';
import '../../css/z/zor11obzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p1w4uvj5m"/><path class="zor11obzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-pin-check-inside"} {...others} />);
}

export default Component;
