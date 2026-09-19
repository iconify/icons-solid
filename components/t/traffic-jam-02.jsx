import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ijbv10b3u.css';
import '../../css/z/zyit0rs6g.css';
import '../../css/z/z7nlpshuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ijbv10b3u"/><path class="zyit0rs6g"/><path class="z7nlpshuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:traffic-jam-02"} {...others} />);
}

export default Component;
