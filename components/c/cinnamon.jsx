import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_o1j080n.css';

const viewBox = {"width":819,"height":727};
const content = `<path class="s_o1j080n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:cinnamon"} {...others} />);
}

export default Component;
