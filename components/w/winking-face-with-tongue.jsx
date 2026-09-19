import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuc-gsb7x.css';
import '../../css/f/f-cjokbhf.css';
import '../../css/u/ueyk_db5a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="wuc-gsb7x"/><path class="f-cjokbhf"/><path class="ueyk_db5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:winking-face-with-tongue"} {...others} />);
}

export default Component;
