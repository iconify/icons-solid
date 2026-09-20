import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7w8d9joa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i7w8d9joa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bookstack-dark"} {...others} />);
}

export default Component;
