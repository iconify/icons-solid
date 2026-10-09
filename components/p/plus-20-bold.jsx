import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swevlxb4e.css';
import '../../css/h/hgy1l_tlx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="swevlxb4e"/><path class="hgy1l_tlx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plus-20-bold"} {...others} />);
}

export default Component;
