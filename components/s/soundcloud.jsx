import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqbt5cble.css';

const viewBox = {"width":1024,"height":622};
const content = `<path class="pqbt5cble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:soundcloud"} {...others} />);
}

export default Component;
