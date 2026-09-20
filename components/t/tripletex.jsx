import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ars0csbok.css';
import '../../css/w/wuxne-bcb.css';
import '../../css/o/owmyuv0ev.css';

const viewBox = {"width":25.9,"height":38};
const content = `<path class="ars0csbok"/><path class="wuxne-bcb"/><path class="owmyuv0ev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tripletex"} {...others} />);
}

export default Component;
