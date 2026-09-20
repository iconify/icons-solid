import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4jzllbjx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z4jzllbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:happy-face-with-face-mask-in-circle"} {...others} />);
}

export default Component;
