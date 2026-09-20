import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnm3uwu-x.css';
import '../../css/w/wwvjbde6h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gnm3uwu-x"/><path class="wwvjbde6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:user-circle"} {...others} />);
}

export default Component;
