import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxn3cgkyv.css';

const viewBox = {"width":1024,"height":614};
const content = `<path class="uxn3cgkyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:moustache"} {...others} />);
}

export default Component;
