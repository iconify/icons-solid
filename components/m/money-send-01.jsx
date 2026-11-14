import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2705r1-z.css';
import '../../css/g/g48w89bvm.css';
import '../../css/i/it2w4qb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p2705r1-z"/><path class="g48w89bvm"/><path class="it2w4qb0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-send-01"} {...others} />);
}

export default Component;
