import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gwch8dg2h.css';
import '../../css/a/ayl35hsyj.css';
import '../../css/i/icz5thi1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="gwch8dg2h"/><path class="ayl35hsyj"/><path class="icz5thi1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:calendar-edit-1"} {...others} />);
}

export default Component;
