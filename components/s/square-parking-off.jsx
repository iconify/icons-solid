import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a04ld8whi.css';
import '../../css/p/pd-c31btu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a04ld8whi"/><path class="pd-c31btu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-parking-off"} {...others} />);
}

export default Component;
