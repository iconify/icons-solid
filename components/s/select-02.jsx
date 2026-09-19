import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p1yhvzbay.css';
import '../../css/x/xljnl52qq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p1yhvzbay"/><path class="xljnl52qq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:select-02"} {...others} />);
}

export default Component;
