import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac6pctzqp.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ac6pctzqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:minus"} {...others} />);
}

export default Component;
