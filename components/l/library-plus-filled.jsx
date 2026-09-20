import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lg9pn0d6c.css';
import '../../css/l/l3t4a9kch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lg9pn0d6c"/><path class="l3t4a9kch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:library-plus-filled"} {...others} />);
}

export default Component;
