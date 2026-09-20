import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xx45c8nza.css';
import '../../css/f/f960nwbew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xx45c8nza"/><path class="f960nwbew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:umbrella-off"} {...others} />);
}

export default Component;
