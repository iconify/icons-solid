import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvpmwgqvj.css';

const viewBox = {"width":1792,"height":1664};
const content = `<path class="vvpmwgqvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:no-smoking-alt"} {...others} />);
}

export default Component;
