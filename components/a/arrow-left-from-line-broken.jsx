import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y69324s2k.css';
import '../../css/r/r2x8l0bfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y69324s2k"/><path class="r2x8l0bfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-from-line-broken"} {...others} />);
}

export default Component;
