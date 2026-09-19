import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2wcqfbcp.css';

const viewBox = {"width":1024,"height":640};
const content = `<path class="c2wcqfbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:capacitator"} {...others} />);
}

export default Component;
