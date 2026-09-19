import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/m/m_h83wbcv.css';
import '../../css/j/jry5s1b0c.css';
import '../../css/q/qup_wkbsi.css';
import '../../css/j/jwr8zqbox.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="m_h83wbcv"/><path class="jry5s1b0c"/><path class="qup_wkbsi"/><path class="jwr8zqbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:radish"} {...others} />);
}

export default Component;
