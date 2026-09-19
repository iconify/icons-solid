import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1ao6026r.css';
import '../../css/c/cxr0b5brz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t1ao6026r"/><rect class="cxr0b5brz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:battery-full"} {...others} />);
}

export default Component;
