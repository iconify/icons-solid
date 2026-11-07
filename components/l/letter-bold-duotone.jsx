import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxyrlcb9h.css';
import '../../css/a/avjg2qbrd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pxyrlcb9h"/><path class="avjg2qbrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:letter-bold-duotone"} {...others} />);
}

export default Component;
