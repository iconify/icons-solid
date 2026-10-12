import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_p5ss2vo.css';
import '../../css/d/dxkcl5b5x.css';
import '../../css/c/chebvlbdx.css';
import '../../css/y/yfwid-gza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="k_p5ss2vo"/><path class="dxkcl5b5x"/><path class="chebvlbdx"/><path class="yfwid-gza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar-heart"} {...others} />);
}

export default Component;
