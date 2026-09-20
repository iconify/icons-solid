import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmmtdvb7f.css';
import '../../css/o/ojt-4acqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nmmtdvb7f"/><path clip-rule="evenodd" class="ojt-4acqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:backspace"} {...others} />);
}

export default Component;
