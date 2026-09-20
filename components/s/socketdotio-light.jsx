import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr1--m9kv.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="gr1--m9kv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:socketdotio-light"} {...others} />);
}

export default Component;
