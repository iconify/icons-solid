import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq0ihnb2y.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jq0ihnb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:brightnessaltauto"} {...others} />);
}

export default Component;
