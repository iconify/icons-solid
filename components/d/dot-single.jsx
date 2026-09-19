import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s96k5zw_d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s96k5zw_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:dot-single"} {...others} />);
}

export default Component;
