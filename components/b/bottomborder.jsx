import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df4b_9t3c.css';

const viewBox = {"width":960,"height":960};
const content = `<path class="df4b_9t3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:bottomborder"} {...others} />);
}

export default Component;
