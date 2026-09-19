import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b69v5bj7j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b69v5bj7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:power-plug"} {...others} />);
}

export default Component;
