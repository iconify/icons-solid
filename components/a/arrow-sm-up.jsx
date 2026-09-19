import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g40yv2bvn.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="g40yv2bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:arrow-sm-up"} {...others} />);
}

export default Component;
