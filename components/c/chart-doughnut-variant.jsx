import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc75y-sag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zc75y-sag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:chart-doughnut-variant"} {...others} />);
}

export default Component;
