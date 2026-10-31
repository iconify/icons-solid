import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2xzm_b_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j2xzm_b_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:reload-alt-round"} {...others} />);
}

export default Component;
