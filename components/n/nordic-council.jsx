import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6_r6x8xh.css';
import '../../css/h/hkoftybrd.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="z6_r6x8xh"/><path class="hkoftybrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:nordic-council"} {...others} />);
}

export default Component;
