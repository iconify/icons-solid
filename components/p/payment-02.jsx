import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xgfrcogqu.css';
import '../../css/j/jixhl9msz.css';
import '../../css/n/nh05mtbfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xgfrcogqu"/><path class="jixhl9msz"/><path class="nh05mtbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:payment-02"} {...others} />);
}

export default Component;
