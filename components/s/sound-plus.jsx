import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdz9vxb_n.css';

const viewBox = {"width":512,"height":472};
const content = `<path class="bdz9vxb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:sound-plus"} {...others} />);
}

export default Component;
