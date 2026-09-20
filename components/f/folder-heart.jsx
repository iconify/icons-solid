import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zmo17s74k.css';
import '../../css/e/eovktwpbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zmo17s74k"/><path class="eovktwpbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-heart"} {...others} />);
}

export default Component;
