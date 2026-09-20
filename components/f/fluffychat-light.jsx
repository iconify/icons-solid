import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_np0pzjt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o_np0pzjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fluffychat-light"} {...others} />);
}

export default Component;
