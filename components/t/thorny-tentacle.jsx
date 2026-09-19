import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-gpt_b2s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c-gpt_b2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:thorny-tentacle"} {...others} />);
}

export default Component;
