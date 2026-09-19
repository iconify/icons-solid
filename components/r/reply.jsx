import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4lny_b2c.css';
import '../../css/e/ey5fvkbdu.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="p4lny_b2c"/><path class="ey5fvkbdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:reply"} {...others} />);
}

export default Component;
