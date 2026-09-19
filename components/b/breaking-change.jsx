import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnij756ni.css';
import '../../css/s/sz1mxmeui.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jnij756ni"/><path class="sz1mxmeui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:breaking-change"} {...others} />);
}

export default Component;
