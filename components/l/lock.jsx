import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8l5l3cxn.css';

const viewBox = {"width":896,"height":1024};
const content = `<path class="s8l5l3cxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:lock"} {...others} />);
}

export default Component;
