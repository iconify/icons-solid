import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik3-pabpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ik3-pabpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lightbulb-gloss"} {...others} />);
}

export default Component;
