import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_2gwyvwb.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="y_2gwyvwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:m-upper-case"} {...others} />);
}

export default Component;
