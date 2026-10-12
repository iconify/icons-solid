import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ki9tfbbtw.css';
import '../../css/v/vfhe1wb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ki9tfbbtw"/><path class="vfhe1wb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ship-filled"} {...others} />);
}

export default Component;
