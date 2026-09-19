import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_gxueo7c.css';
import '../../css/p/p6eql6bly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_gxueo7c st0"/><path class="p6eql6bly st0"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:hinduism"} {...others} />);
}

export default Component;
