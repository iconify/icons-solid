import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/y/yzqd_nbaw.css';
import '../../css/k/kyshkjbdz.css';
import '../../css/n/n57yrcb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="yzqd_nbaw"/><path class="kyshkjbdz"/><path class="n57yrcb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:attention-square-thin"} {...others} />);
}

export default Component;
