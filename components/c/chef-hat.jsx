import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m_e9l_bfp.css';
import '../../css/l/lflmn5b2o.css';
import '../../css/l/lnejq7ksj.css';
import '../../css/o/o6dfa4b9w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="m_e9l_bfp"/><path class="lflmn5b2o"/><path class="lnejq7ksj"/><path class="o6dfa4b9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chef-hat"} {...others} />);
}

export default Component;
