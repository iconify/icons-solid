import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d95zj-bto.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="d95zj-bto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:battery-empty-1-remix"} {...others} />);
}

export default Component;
