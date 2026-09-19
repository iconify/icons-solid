import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agd9mab_q.css';
import '../../css/b/bz45-yz4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="agd9mab_q"/><path class="bz45-yz4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:closet"} {...others} />);
}

export default Component;
