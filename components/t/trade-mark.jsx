import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu6bp5bnh.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="hu6bp5bnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:trade-mark"} {...others} />);
}

export default Component;
