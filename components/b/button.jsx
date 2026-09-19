import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-sd3vb2c.css';

const viewBox = {"width":44,"height":24};
const content = `<path clip-rule="evenodd" class="y-sd3vb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:button"} {...others} />);
}

export default Component;
