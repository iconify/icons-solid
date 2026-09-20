import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/w/w2o6zr2ct.css';
import '../../css/l/lmo1p3o7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="w2o6zr2ct"/><path class="lmo1p3o7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:done-ring-round"} {...others} />);
}

export default Component;
