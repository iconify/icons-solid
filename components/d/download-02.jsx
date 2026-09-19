import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nq2eaccpx.css';
import '../../css/t/tgd7oxbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nq2eaccpx"/><path class="tgd7oxbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:download-02"} {...others} />);
}

export default Component;
