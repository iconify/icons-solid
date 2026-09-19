import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v--_2jb1u.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="v--_2jb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:cursor-rays"} {...others} />);
}

export default Component;
