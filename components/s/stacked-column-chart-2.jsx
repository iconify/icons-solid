import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnw1cjxky.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="jnw1cjxky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:stacked-column-chart-2"} {...others} />);
}

export default Component;
