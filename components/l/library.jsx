import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s3nyltbvc.css';
import '../../css/p/pi0z5lblf.css';
import '../../css/c/cgmlxbbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s3nyltbvc"/><path class="pi0z5lblf"/><path class="cgmlxbbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:library"} {...others} />);
}

export default Component;
