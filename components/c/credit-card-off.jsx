import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h1k6ax5lh.css';
import '../../css/v/v65wkxheu.css';
import '../../css/h/h8pzlv1bf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="h1k6ax5lh"/><path clip-rule="evenodd" class="v65wkxheu"/><path class="h8pzlv1bf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:credit-card-off"} {...others} />);
}

export default Component;
