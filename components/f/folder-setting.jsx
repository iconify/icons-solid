import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pucj1jzhj.css';
import '../../css/p/p9rflmbbg.css';
import '../../css/x/x6_8z9bpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pucj1jzhj"/><path class="p9rflmbbg"/><path class="x6_8z9bpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:folder-setting"} {...others} />);
}

export default Component;
