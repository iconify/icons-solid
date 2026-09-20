import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zabbtyb5d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zabbtyb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:three-dots-horizontal-in-rectangle"} {...others} />);
}

export default Component;
