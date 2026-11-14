import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sdjhl_02i.css';
import '../../css/h/hzwc_3pcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sdjhl_02i"/><path class="hzwc_3pcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tag-02"} {...others} />);
}

export default Component;
