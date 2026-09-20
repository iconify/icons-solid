import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx7y6ebae.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qx7y6ebae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:smiling-face-in-circle"} {...others} />);
}

export default Component;
