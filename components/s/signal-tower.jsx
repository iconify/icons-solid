import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vcvuz55ep.css';
import '../../css/j/jh9t2i2nr.css';
import '../../css/a/aum__2m_b.css';
import '../../css/v/vt0zkvbct.css';
import '../../css/o/o_pbzeu9w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vcvuz55ep"/><path class="jh9t2i2nr"/><path class="aum__2m_b"/><path class="vt0zkvbct"/><path class="o_pbzeu9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:signal-tower"} {...others} />);
}

export default Component;
