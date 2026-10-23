import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vjjd-8xuz.css';
import '../../css/j/j61axnofj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vjjd-8xuz"/><path class="j61axnofj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-code"} {...others} />);
}

export default Component;
