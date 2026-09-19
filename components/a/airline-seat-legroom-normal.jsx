import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzo1he64y.css';

const viewBox = {"width":408,"height":384};
const content = `<path class="pzo1he64y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:airline-seat-legroom-normal"} {...others} />);
}

export default Component;
