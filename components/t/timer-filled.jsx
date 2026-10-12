import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un164r4db.css';
import '../../css/m/m_0bwy7ii.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="un164r4db"/><path class="m_0bwy7ii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:timer-filled"} {...others} />);
}

export default Component;
