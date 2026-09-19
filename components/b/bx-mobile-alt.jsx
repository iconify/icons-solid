import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8bxn6b7q.css';
import '../../css/m/mojfvmkcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d8bxn6b7q"/><circle class="mojfvmkcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-mobile-alt"} {...others} />);
}

export default Component;
