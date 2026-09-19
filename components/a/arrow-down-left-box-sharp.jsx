import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn3j_6bgg.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="jn3j_6bgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:arrow-down-left-box-sharp"} {...others} />);
}

export default Component;
