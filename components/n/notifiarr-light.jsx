import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayj5n7qxt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ayj5n7qxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:notifiarr-light"} {...others} />);
}

export default Component;
