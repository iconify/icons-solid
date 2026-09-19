import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu6eqibhi.css';
import '../../css/n/n6mum1zrt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="iu6eqibhi"/><path class="n6mum1zrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tablet"} {...others} />);
}

export default Component;
