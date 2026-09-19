import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1yn-jb2k.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="y1yn-jb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:pin-fill-12"} {...others} />);
}

export default Component;
