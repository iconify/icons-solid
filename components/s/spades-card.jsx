import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv0hedcfd.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="pv0hedcfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:spades-card"} {...others} />);
}

export default Component;
