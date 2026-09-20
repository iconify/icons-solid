import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc-bx1btv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xc-bx1btv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:alarm-smoke"} {...others} />);
}

export default Component;
