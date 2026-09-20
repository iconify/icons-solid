import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9s-xjbik.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="i9s-xjbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:status-neutral"} {...others} />);
}

export default Component;
