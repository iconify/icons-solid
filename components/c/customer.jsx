import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ariq7rbyx.css';
import '../../css/r/r8qtg0eea.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ariq7rbyx"/><path class="r8qtg0eea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:customer"} {...others} />);
}

export default Component;
