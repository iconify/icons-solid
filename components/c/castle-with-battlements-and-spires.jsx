import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9jeykb_m.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m9jeykb_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:castle-with-battlements-and-spires"} {...others} />);
}

export default Component;
