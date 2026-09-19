import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pgjt86b_x.css';
import '../../css/u/ukm46zb4e.css';
import '../../css/s/sw0c0ebjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pgjt86b_x"/><path class="ukm46zb4e"/><path class="sw0c0ebjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-send-02"} {...others} />);
}

export default Component;
