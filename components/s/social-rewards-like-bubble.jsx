import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f770scbge.css';
import '../../css/b/bgy0nnrsi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f770scbge"/><path class="bgy0nnrsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:social-rewards-like-bubble"} {...others} />);
}

export default Component;
