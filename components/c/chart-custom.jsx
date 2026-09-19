import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gue8-4pzr.css';
import '../../css/f/f1ijkjbnr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gue8-4pzr"/><path class="f1ijkjbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-custom"} {...others} />);
}

export default Component;
