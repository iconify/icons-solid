import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyeg-yb4x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hyeg-yb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:stamp-solid"} {...others} />);
}

export default Component;
