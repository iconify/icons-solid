import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wu4mh-bky.css';
import '../../css/k/kwzthjhqj.css';
import '../../css/y/ya16kgbml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wu4mh-bky"/><path clip-rule="evenodd" class="kwzthjhqj"/><path class="ya16kgbml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rural-post-outline-24px"} {...others} />);
}

export default Component;
