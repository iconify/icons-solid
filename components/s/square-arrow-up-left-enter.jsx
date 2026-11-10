import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gk3wqebxh.css';
import '../../css/r/rucnbishu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gk3wqebxh"/><path class="rucnbishu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-arrow-up-left-enter"} {...others} />);
}

export default Component;
