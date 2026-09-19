import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtvcw1bvs.css';
import '../../css/f/f5u8_gz6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jtvcw1bvs"/><path class="f5u8_gz6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:graduation"} {...others} />);
}

export default Component;
