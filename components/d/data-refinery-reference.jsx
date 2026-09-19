import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uez273bbq.css';
import '../../css/h/hhu-8gb9v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uez273bbq"/><path class="hhu-8gb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-refinery-reference"} {...others} />);
}

export default Component;
