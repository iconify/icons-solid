import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntk51_c5t.css';

const viewBox = {"width":1024,"height":896};
const content = `<path class="ntk51_c5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:leechprotect"} {...others} />);
}

export default Component;
