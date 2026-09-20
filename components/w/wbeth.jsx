import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eri20hbvp.css';
import '../../css/f/fjgje8g2t.css';
import '../../css/j/j9rd_gb-v.css';
import '../../css/u/up4ivccyu.css';
import '../../css/c/csg6-mbic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eri20hbvp"/><path class="fjgje8g2t"/><path class="j9rd_gb-v"/><path class="up4ivccyu"/><path class="csg6-mbic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wbeth"} {...others} />);
}

export default Component;
