import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wrkd8ms6w.css';
import '../../css/g/g68e1q3zh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wrkd8ms6w"/><path class="g68e1q3zh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:flower-2"} {...others} />);
}

export default Component;
