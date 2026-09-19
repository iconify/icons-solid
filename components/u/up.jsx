import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtfmx7b3v.css';
import '../../css/q/q71zpxnss.css';
import '../../css/a/apk-1jb4g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wtfmx7b3v"><path class="q71zpxnss"/><path class="apk-1jb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:up"} {...others} />);
}

export default Component;
