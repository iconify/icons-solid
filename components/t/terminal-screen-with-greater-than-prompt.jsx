import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k55xkrb5o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k55xkrb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:terminal-screen-with-greater-than-prompt"} {...others} />);
}

export default Component;
