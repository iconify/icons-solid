import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbuw4i61g.css';
import '../../css/m/mk20stbyl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vbuw4i61g"/><path class="mk20stbyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:eye-off-filled"} {...others} />);
}

export default Component;
