import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0rk0_b2c.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="j0rk0_b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:animestudio"} {...others} />);
}

export default Component;
