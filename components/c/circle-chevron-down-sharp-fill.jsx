import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey3bs5pmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ey3bs5pmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-chevron-down-sharp-fill"} {...others} />);
}

export default Component;
