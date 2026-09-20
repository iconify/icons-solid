import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozngikbrp.css';
import '../../css/j/ja_pvabut.css';
import '../../css/v/vd8v4dbog.css';
import '../../css/w/wusb7nxgf.css';
import '../../css/u/u6m0v1bng.css';

const viewBox = {"width":477.104,"height":161.281};
const content = `<g class="ozngikbrp"><path class="ja_pvabut"/><path class="vd8v4dbog"/><path class="wusb7nxgf"/></g><path class="u6m0v1bng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:al-jazeera"} {...others} />);
}

export default Component;
