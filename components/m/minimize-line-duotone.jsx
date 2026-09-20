import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n07drobuw.css';
import '../../css/b/bvt-woblq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n07drobuw"/><path class="bvt-woblq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-line-duotone"} {...others} />);
}

export default Component;
