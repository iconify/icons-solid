import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/je1cs0byc.css';
import '../../css/y/y9flf7vox.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="je1cs0byc"/><path class="y9flf7vox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:diabetes"} {...others} />);
}

export default Component;
