import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt9l7tg7v.css';
import '../../css/g/gf8zvzb-o.css';
import '../../css/r/rkm926b8g.css';
import '../../css/y/yudx6acyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yt9l7tg7v"/><path class="gf8zvzb-o"/><path class="rkm926b8g"/><path class="yudx6acyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-waving"} {...others} />);
}

export default Component;
