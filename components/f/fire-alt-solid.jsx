import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pez3-pb9n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pez3-pb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:fire-alt-solid"} {...others} />);
}

export default Component;
