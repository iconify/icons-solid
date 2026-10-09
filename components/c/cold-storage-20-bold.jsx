import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao3l91_rp.css';
import '../../css/y/yc4_t_bsz.css';
import '../../css/y/ygr30c8ly.css';
import '../../css/m/m_alf_hon.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ao3l91_rp"/><path class="yc4_t_bsz"/><path class="ygr30c8ly"/><path class="m_alf_hon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cold-storage-20-bold"} {...others} />);
}

export default Component;
