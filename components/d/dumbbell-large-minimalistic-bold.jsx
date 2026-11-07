import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si5z23b4a.css';
import '../../css/b/b17et-bkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="si5z23b4a"/><path clip-rule="evenodd" class="b17et-bkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-large-minimalistic-bold"} {...others} />);
}

export default Component;
