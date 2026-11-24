import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvdvp0-cq.css';
import '../../css/r/rii3008cf.css';
import '../../css/y/yxwk1vbdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvdvp0-cq"/><path class="rii3008cf"/><path class="yxwk1vbdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-drizzle-filled"} {...others} />);
}

export default Component;
