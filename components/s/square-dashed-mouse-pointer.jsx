import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr3rkb2_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rr3rkb2_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:square-dashed-mouse-pointer"} {...others} />);
}

export default Component;
