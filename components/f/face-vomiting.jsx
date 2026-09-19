import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/skvyhibqd.css';
import '../../css/h/h3zeusy6a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="skvyhibqd"/><path class="h3zeusy6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:face-vomiting"} {...others} />);
}

export default Component;
