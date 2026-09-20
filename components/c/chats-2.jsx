import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cq7vavbxw.css';
import '../../css/c/cag512bei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cq7vavbxw"/><path class="cag512bei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:chats-2"} {...others} />);
}

export default Component;
