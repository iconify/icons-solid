import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iwx9si_fo.css';
import '../../css/d/drfr_4djm.css';
import '../../css/w/wyt5m4hvc.css';
import '../../css/l/l1cumibmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iwx9si_fo"/><path class="drfr_4djm"/><path class="wyt5m4hvc"/><path class="l1cumibmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:goals"} {...others} />);
}

export default Component;
