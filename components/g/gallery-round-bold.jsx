import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv4_o-byj.css';
import '../../css/w/wzjbfwbgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yv4_o-byj"/><path clip-rule="evenodd" class="wzjbfwbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-round-bold"} {...others} />);
}

export default Component;
