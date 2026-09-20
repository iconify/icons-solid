import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn93tzbwi.css';
import '../../css/k/kveslos6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nn93tzbwi"/><path clip-rule="evenodd" class="kveslos6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:trashcan"} {...others} />);
}

export default Component;
