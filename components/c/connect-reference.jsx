import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftv6d47py.css';
import '../../css/a/ananko81k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ftv6d47py"/><path class="ananko81k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:connect-reference"} {...others} />);
}

export default Component;
