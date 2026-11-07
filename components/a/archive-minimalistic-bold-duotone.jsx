import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwp0jxbbp.css';
import '../../css/k/ke6bcb_hh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jwp0jxbbp"/><path class="ke6bcb_hh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
