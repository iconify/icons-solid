import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jewwt-x9z.css';
import '../../css/w/wvbr6fbby.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/d/d51dg7lbe.css';
import '../../css/q/qy8baw-ee.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jewwt-x9z"/><path class="wvbr6fbby"/><g class="wtfmx7b3v"><path class="d51dg7lbe"/><path class="qy8baw-ee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:lock-portrait"} {...others} />);
}

export default Component;
