import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkdn7u2si.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="xkdn7u2si"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:hocho-filled"} {...others} />);
}

export default Component;
