import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9l5b2b1x.css';

const viewBox = {"width":897,"height":1024};
const content = `<path class="x9l5b2b1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:clipboardalt"} {...others} />);
}

export default Component;
