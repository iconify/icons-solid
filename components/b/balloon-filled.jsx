import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gvsmm0bfa.css';
import '../../css/i/i6291bvll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gvsmm0bfa"/><path class="i6291bvll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:balloon-filled"} {...others} />);
}

export default Component;
