import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpmw0obfn.css';
import '../../css/e/ehafz-rwx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jpmw0obfn"/><path class="ehafz-rwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:information-filled"} {...others} />);
}

export default Component;
