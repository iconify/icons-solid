import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfnq0bbpq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cfnq0bbpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:cloud-upload"} {...others} />);
}

export default Component;
