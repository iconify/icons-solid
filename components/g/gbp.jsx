import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx2w4zb8i.css';

const viewBox = {"width":1024,"height":1408};
const content = `<path class="mx2w4zb8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:gbp"} {...others} />);
}

export default Component;
