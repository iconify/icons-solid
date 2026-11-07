import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmiwmz8tp.css';
import '../../css/y/yat6fclko.css';
import '../../css/l/lzc15j6kx.css';
import '../../css/h/hh0k1-0jo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vmiwmz8tp"/><path class="yat6fclko"/><path class="lzc15j6kx"/><path class="hh0k1-0jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-bold"} {...others} />);
}

export default Component;
