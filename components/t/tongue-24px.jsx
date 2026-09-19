import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/guxl7542t.css';
import '../../css/v/v23rm7oqz.css';
import '../../css/c/ce7pxobfo.css';
import '../../css/i/id14f9b0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="guxl7542t"/><path class="v23rm7oqz"/><path class="ce7pxobfo"/><path clip-rule="evenodd" class="id14f9b0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:tongue-24px"} {...others} />);
}

export default Component;
