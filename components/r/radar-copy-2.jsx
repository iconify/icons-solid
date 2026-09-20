import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9y04fb7u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f9y04fb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:radar-copy-2"} {...others} />);
}

export default Component;
