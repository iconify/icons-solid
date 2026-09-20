import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt8wyto3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kt8wyto3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-double-alt-arrow-up-outline"} {...others} />);
}

export default Component;
