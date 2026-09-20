import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2_2ljb0l.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="h2_2ljb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:lightbulb"} {...others} />);
}

export default Component;
