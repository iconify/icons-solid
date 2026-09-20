import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stk0jfp5a.css';
import '../../css/s/sjc8stbkt.css';

const viewBox = {"width":196,"height":256};
const content = `<path class="stk0jfp5a"/><path class="sjc8stbkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:afordin-light"} {...others} />);
}

export default Component;
