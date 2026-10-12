import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2c8qbzit.css';
import '../../css/v/vux-2mbqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a2c8qbzit"/><path class="vux-2mbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-chevrons-right-filled"} {...others} />);
}

export default Component;
