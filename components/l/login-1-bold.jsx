import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj35_-k0x.css';
import '../../css/o/oqihxmc0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jj35_-k0x"/><path class="oqihxmc0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:login-1-bold"} {...others} />);
}

export default Component;
