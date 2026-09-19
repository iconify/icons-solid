import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysqx7v64s.css';
import '../../css/c/cry0eib_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ysqx7v64s"/><path class="cry0eib_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:backpack"} {...others} />);
}

export default Component;
