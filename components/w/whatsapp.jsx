import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_8a0ebkt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l_8a0ebkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:whatsapp"} {...others} />);
}

export default Component;
