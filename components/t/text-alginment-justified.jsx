import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbh9tiw4m.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="hbh9tiw4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:text-alginment-justified"} {...others} />);
}

export default Component;
