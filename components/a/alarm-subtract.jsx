import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsubc8bso.css';
import '../../css/b/b3wbj4but.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vsubc8bso"/><path class="b3wbj4but"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:alarm-subtract"} {...others} />);
}

export default Component;
