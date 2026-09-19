import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f2g0j6vag.css';
import '../../css/a/a3mmebbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f2g0j6vag"/><path class="a3mmebbyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trademark"} {...others} />);
}

export default Component;
