import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm34mjb-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xm34mjb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-bell-minus"} {...others} />);
}

export default Component;
