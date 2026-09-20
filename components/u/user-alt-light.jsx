import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/nvif07b4t.css';
import '../../css/a/a-6ag2bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><circle class="nvif07b4t"/><path class="a-6ag2bvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-alt-light"} {...others} />);
}

export default Component;
