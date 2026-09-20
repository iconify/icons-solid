import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p777b5bsc.css';
import '../../css/i/iic8aijvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p777b5bsc"/><path class="iic8aijvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:intercom"} {...others} />);
}

export default Component;
