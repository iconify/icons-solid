import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x0q6h9bqn.css';
import '../../css/p/p9c0hjbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x0q6h9bqn"/><path class="p9c0hjbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alt-arrow-right-line-duotone"} {...others} />);
}

export default Component;
