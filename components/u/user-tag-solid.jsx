import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwq6kdb5i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rwq6kdb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:user-tag-solid"} {...others} />);
}

export default Component;
