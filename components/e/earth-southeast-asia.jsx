import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b78-uobgs.css';
import '../../css/e/eqms1ckur.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b78-uobgs"/><path class="eqms1ckur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:earth-southeast-asia"} {...others} />);
}

export default Component;
