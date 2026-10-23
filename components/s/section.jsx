import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sh-uryqie.css';
import '../../css/z/zba8xj3cl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sh-uryqie"/><path class="zba8xj3cl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:section"} {...others} />);
}

export default Component;
