import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu5cqxbmo.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="fu5cqxbmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:chevron-up-12"} {...others} />);
}

export default Component;
