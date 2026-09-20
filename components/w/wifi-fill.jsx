import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l06t19rlj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l06t19rlj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:wifi-fill"} {...others} />);
}

export default Component;
