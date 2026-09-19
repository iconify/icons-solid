import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn9-vhbwr.css';

const viewBox = {"width":328,"height":512};
const content = `<path class="fn9-vhbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:pc"} {...others} />);
}

export default Component;
