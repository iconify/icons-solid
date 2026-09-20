import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpi5w_ocz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpi5w_ocz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:home-plus"} {...others} />);
}

export default Component;
