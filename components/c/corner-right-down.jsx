import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6w2vth6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6w2vth6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:corner-right-down"} {...others} />);
}

export default Component;
