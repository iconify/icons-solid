import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5j9-8b3r.css';
import '../../css/w/w0npftb6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o5j9-8b3r"/><path clip-rule="evenodd" class="w0npftb6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:lock"} {...others} />);
}

export default Component;
