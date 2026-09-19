import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i82ymobjg.css';

const viewBox = {"width":536,"height":512};
const content = `<path class="i82ymobjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:star-half-alt"} {...others} />);
}

export default Component;
