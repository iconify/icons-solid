import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck9wswbnb.css';
import '../../css/a/aifu62-rj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ck9wswbnb"/><path class="aifu62-rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smartphone-20"} {...others} />);
}

export default Component;
