import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg2_fzpty.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="lg2_fzpty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:adobe-after-effects-filled"} {...others} />);
}

export default Component;
