import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/ek7otbbmh.css';
import '../../css/d/dq-gmxanu.css';
import '../../css/p/p7ljzqyoh.css';
import '../../css/t/tqb_6nb6c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ek7otbbmh"/><path class="dq-gmxanu"/><path class="p7ljzqyoh"/><circle class="tqb_6nb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:radar-three"} {...others} />);
}

export default Component;
