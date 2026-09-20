import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omopg9mhb.css';
import '../../css/n/ngs9tw2ne.css';
import '../../css/i/id5d7cbpm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="omopg9mhb"/><path class="ngs9tw2ne"/><path class="id5d7cbpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-text-format-2"} {...others} />);
}

export default Component;
