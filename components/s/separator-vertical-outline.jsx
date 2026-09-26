import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gck084bsd.css';
import '../../css/l/ly96r7zqe.css';
import '../../css/c/cfa4tobzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gck084bsd"/><path class="ly96r7zqe"/><path class="cfa4tobzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:separator-vertical-outline"} {...others} />);
}

export default Component;
