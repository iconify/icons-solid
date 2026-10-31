import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw2f2mrxi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bw2f2mrxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-terminal-gloss"} {...others} />);
}

export default Component;
