import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-qz8s0dl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-qz8s0dl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:trending-up-down"} {...others} />);
}

export default Component;
