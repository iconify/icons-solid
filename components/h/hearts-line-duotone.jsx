import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nxswq5bsu.css';
import '../../css/h/hundiocav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nxswq5bsu"/><path class="hundiocav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hearts-line-duotone"} {...others} />);
}

export default Component;
