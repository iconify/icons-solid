import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wfufpqbhm.css';
import '../../css/g/gy9n3pbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wfufpqbhm"/><path class="gy9n3pbyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:settings-dot-duotone"} {...others} />);
}

export default Component;
