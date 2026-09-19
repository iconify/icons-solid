import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk9xfo3pn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pk9xfo3pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:xrp"} {...others} />);
}

export default Component;
