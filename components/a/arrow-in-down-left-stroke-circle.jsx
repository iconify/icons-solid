import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcbbnl92k.css';
import '../../css/r/r_38ooa_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hcbbnl92k"/><path class="r_38ooa_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-down-left-stroke-circle"} {...others} />);
}

export default Component;
