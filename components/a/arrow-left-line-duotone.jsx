import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fflwcby7a.css';
import '../../css/g/giqbfv3yn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fflwcby7a"/><path class="giqbfv3yn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-line-duotone"} {...others} />);
}

export default Component;
