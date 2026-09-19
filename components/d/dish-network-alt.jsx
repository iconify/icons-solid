import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhmh6qbmy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nhmh6qbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:dish-network-alt"} {...others} />);
}

export default Component;
