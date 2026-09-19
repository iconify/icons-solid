import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gl0vd86ea.css';
import '../../css/v/vsgtqbb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gl0vd86ea"/><path class="vsgtqbb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:skip-next-solid"} {...others} />);
}

export default Component;
