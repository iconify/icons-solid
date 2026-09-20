import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/e/eygv3397z.css';
import '../../css/b/bo-qhqn4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><path class="eygv3397z"/><path class="bo-qhqn4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-alt-add-duotone-line"} {...others} />);
}

export default Component;
