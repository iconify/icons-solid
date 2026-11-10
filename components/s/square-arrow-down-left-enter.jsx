import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/upzce1bdl.css';
import '../../css/s/s5ndeshyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="upzce1bdl"/><path class="s5ndeshyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-arrow-down-left-enter"} {...others} />);
}

export default Component;
