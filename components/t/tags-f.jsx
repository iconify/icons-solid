import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu271i46h.css';

const viewBox = {"width":24,"height":24,"top":-2.5};
const content = `<path class="qu271i46h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:tags-f"} {...others} />);
}

export default Component;
