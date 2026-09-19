import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfjgc5bzj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mfjgc5bzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:double-axis-chart-column"} {...others} />);
}

export default Component;
