import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5r_4793o.css';
import '../../css/k/kgwqmdg7m.css';
import '../../css/y/y8b389s9h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d5r_4793o"/><path class="kgwqmdg7m"/><path class="y8b389s9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:erase-3d"} {...others} />);
}

export default Component;
