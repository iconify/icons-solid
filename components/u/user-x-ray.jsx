import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-wun9brn.css';
import '../../css/l/libay-4ab.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c-wun9brn"/><path class="libay-4ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:user-x-ray"} {...others} />);
}

export default Component;
