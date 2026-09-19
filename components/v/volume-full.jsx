import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/himehxbog.css';
import '../../css/j/jhsk6hp0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="himehxbog"/><path class="jhsk6hp0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:volume-full"} {...others} />);
}

export default Component;
