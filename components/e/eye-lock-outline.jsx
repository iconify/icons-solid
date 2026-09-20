import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5zr_9r_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o5zr_9r_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:eye-lock-outline"} {...others} />);
}

export default Component;
