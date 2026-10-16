import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it6b2o5on.css';
import '../../css/z/znj3s6bsn.css';

const viewBox = {"width":1314.4,"height":1314.4,"left":340.8,"top":342.8};
const content = `<path class="it6b2o5on"/><path class="znj3s6bsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:soketi"} {...others} />);
}

export default Component;
