import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2gl3acpc.css';
import '../../css/x/xc0yxgbay.css';
import '../../css/u/udt3hqb4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f2gl3acpc"/><path clip-rule="evenodd" class="xc0yxgbay"/><path class="udt3hqb4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:plug"} {...others} />);
}

export default Component;
