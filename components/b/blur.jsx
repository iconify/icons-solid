import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ftr8m-ovk.css';
import '../../css/q/q4xt-6b4w.css';
import '../../css/p/pn65m_b8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ftr8m-ovk"/><path clip-rule="evenodd" class="q4xt-6b4w"/><path class="pn65m_b8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:blur"} {...others} />);
}

export default Component;
