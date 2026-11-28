import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8_x0i1lv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m8_x0i1lv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:line-chart-sparkles-solid"} {...others} />);
}

export default Component;
