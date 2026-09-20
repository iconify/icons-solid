import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u4tymacwu.css';
import '../../css/u/ujsp5sb0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u4tymacwu"/><circle class="ujsp5sb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:key-round"} {...others} />);
}

export default Component;
