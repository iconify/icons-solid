import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m370vb7uq.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="m370vb7uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:plant-handbook-filled"} {...others} />);
}

export default Component;
