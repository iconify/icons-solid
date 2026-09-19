import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1eef546k.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="a1eef546k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:right-black-triangle-filled"} {...others} />);
}

export default Component;
