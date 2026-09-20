import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhahj9bzw.css';

const viewBox = {"width":1991.3,"height":2143.2};
const content = `<path class="mhahj9bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:airbnb"} {...others} />);
}

export default Component;
