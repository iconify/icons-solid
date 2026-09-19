import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dr7j_s4ov.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dr7j_s4ov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:turkey-meat-filled"} {...others} />);
}

export default Component;
