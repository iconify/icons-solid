import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq13o3pul.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="jq13o3pul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:heart-circle-check"} {...others} />);
}

export default Component;
