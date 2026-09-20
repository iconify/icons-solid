import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x95cywz2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x95cywz2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bell-check-outline"} {...others} />);
}

export default Component;
