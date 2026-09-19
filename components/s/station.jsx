import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xmdleo1yt.css';
import '../../css/c/cwvw2cbdu.css';
import '../../css/v/v8kz5ne8r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="xmdleo1yt"/><path class="cwvw2cbdu"/><path class="v8kz5ne8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:station"} {...others} />);
}

export default Component;
