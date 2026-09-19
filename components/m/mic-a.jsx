import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-lg0wb-p.css';
import '../../css/w/w7cn_ur_a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b-lg0wb-p"/><path class="w7cn_ur_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:mic-a"} {...others} />);
}

export default Component;
