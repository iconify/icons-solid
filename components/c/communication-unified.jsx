import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m-w9b8a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a0m-w9b8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:communication-unified"} {...others} />);
}

export default Component;
