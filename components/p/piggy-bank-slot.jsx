import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw-8qhb8k.css';
import '../../css/a/a78cr7b8e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lw-8qhb8k"/><path class="a78cr7b8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:piggy-bank-slot"} {...others} />);
}

export default Component;
