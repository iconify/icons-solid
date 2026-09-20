import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ainr45o9r.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="ainr45o9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:calendar-month"} {...others} />);
}

export default Component;
