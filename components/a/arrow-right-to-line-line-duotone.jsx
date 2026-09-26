import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tgvfhnabb.css';
import '../../css/p/p2xi9gwtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tgvfhnabb"/><path class="p2xi9gwtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-to-line-line-duotone"} {...others} />);
}

export default Component;
