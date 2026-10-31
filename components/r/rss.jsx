import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cp7z90b6o.css';
import '../../css/f/f1u9n4bqt.css';
import '../../css/j/j1lwyvbxb.css';
import '../../css/f/f35-b8xpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cp7z90b6o wm-shadow"/><path class="f1u9n4bqt wm-shadow"/><path class="j1lwyvbxb"/><path class="f35-b8xpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:rss"} {...others} />);
}

export default Component;
