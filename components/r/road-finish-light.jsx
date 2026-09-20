import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/q/q7ytwq49i.css';
import '../../css/e/em-vuhbtk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="q7ytwq49i"/><path class="em-vuhbtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:road-finish-light"} {...others} />);
}

export default Component;
