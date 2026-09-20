import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q126ik-do.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="q126ik-do"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:wifi3"} {...others} />);
}

export default Component;
