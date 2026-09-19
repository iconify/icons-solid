import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjp8o5b5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xjp8o5b5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:fritzbox-7530"} {...others} />);
}

export default Component;
