import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qia2bntri.css';
import '../../css/i/izs9_e8rp.css';
import '../../css/e/eyx_5_biz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qia2bntri"/><path class="izs9_e8rp"/><path class="eyx_5_biz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:play-list-favourite-02"} {...others} />);
}

export default Component;
