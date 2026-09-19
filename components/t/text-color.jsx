import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt6tz56sr.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="xt6tz56sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:text-color"} {...others} />);
}

export default Component;
