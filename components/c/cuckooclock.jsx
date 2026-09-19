import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7qer0kun.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="l7qer0kun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:cuckooclock"} {...others} />);
}

export default Component;
