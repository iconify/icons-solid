import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a1d08c85x.css';
import '../../css/v/vcro5da3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a1d08c85x"/><path class="vcro5da3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-line-duotone"} {...others} />);
}

export default Component;
