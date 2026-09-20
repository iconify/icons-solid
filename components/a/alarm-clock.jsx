import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlnc8j4gt.css';
import '../../css/w/w-f7zlbrw.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="hlnc8j4gt"/><path class="w-f7zlbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:alarm-clock"} {...others} />);
}

export default Component;
