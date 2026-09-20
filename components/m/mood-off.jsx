import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hxxme0dzb.css';
import '../../css/j/j1etcibqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hxxme0dzb"/><path class="j1etcibqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-off"} {...others} />);
}

export default Component;
