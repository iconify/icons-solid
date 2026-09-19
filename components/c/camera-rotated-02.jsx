import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pvkze8dif.css';
import '../../css/o/o_2ogi-bv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pvkze8dif"/><path class="o_2ogi-bv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-rotated-02"} {...others} />);
}

export default Component;
