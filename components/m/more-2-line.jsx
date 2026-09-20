import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s50kqrtcf.css';
import '../../css/i/iwrg-gb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s50kqrtcf"/><path class="iwrg-gb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:more-2-line"} {...others} />);
}

export default Component;
