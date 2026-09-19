import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7c9n1blo.css';

const viewBox = {"width":1085,"height":614};
const content = `<path class="p7c9n1blo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:soundcloud"} {...others} />);
}

export default Component;
