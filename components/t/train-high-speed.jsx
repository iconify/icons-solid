import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rsnwlqbxu.css';
import '../../css/o/o4vjfsb1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rsnwlqbxu"/><path class="o4vjfsb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:train-high-speed"} {...others} />);
}

export default Component;
