import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w6ino8b1a.css';
import '../../css/j/jc63eabov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w6ino8b1a"/><path class="jc63eabov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:analyze"} {...others} />);
}

export default Component;
