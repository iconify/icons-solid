import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nt0u17bcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nt0u17bcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:happy-heart-eyes"} {...others} />);
}

export default Component;
