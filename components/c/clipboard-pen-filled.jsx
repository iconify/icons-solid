import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nauphjpxp.css';
import '../../css/g/grxjc5bmt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nauphjpxp"/><path clip-rule="evenodd" class="grxjc5bmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clipboard-pen-filled"} {...others} />);
}

export default Component;
