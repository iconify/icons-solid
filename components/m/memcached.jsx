import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/not9azb9h.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="not9azb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:memcached"} {...others} />);
}

export default Component;
