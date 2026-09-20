import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dl2nz2boo.css';
import '../../css/z/zgl_8cbax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dl2nz2boo"/><path class="zgl_8cbax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-duotone"} {...others} />);
}

export default Component;
