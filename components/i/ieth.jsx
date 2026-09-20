import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7hsp1bfr.css';
import '../../css/b/bn2tkibzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f7hsp1bfr"/><path class="bn2tkibzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ieth"} {...others} />);
}

export default Component;
