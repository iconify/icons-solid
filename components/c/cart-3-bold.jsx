import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8gjv4ccw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y8gjv4ccw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-3-bold"} {...others} />);
}

export default Component;
