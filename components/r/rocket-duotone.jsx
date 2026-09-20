import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t0jj9rbth.css';
import '../../css/f/fjxiq25kt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t0jj9rbth"/><path class="fjxiq25kt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rocket-duotone"} {...others} />);
}

export default Component;
