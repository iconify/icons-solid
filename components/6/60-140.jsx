import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq-a3xwaf.css';

const viewBox = {"width":528,"height":448};
const content = `<path class="mq-a3xwaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:60-140"} {...others} />);
}

export default Component;
