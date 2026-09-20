import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5rw2ua2l.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="w5rw2ua2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:cinema-14"} {...others} />);
}

export default Component;
