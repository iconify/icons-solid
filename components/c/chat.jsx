import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5qi60--x.css';
import '../../css/z/zqip_ybwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5qi60--x"/><path class="zqip_ybwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:chat"} {...others} />);
}

export default Component;
