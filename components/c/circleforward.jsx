import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2gi3tfwi.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="i2gi3tfwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circleforward"} {...others} />);
}

export default Component;
