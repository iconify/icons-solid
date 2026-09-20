import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/ab7mr5bar.css';
import '../../css/h/hvogl5m7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ab7mr5bar"/><path class="hvogl5m7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:navigate-light"} {...others} />);
}

export default Component;
