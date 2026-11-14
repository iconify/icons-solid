import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jjxr1tb3o.css';
import '../../css/u/uq1ukubtf.css';
import '../../css/q/q_niwi8da.css';
import '../../css/g/gq3zsabvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jjxr1tb3o"/><path class="uq1ukubtf"/><path class="q_niwi8da"/><path class="gq3zsabvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:shop-charging"} {...others} />);
}

export default Component;
