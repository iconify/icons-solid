import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/welwrs0wp.css';
import '../../css/u/ucysj7t_m.css';
import '../../css/n/nhbi39eqa.css';
import '../../css/g/gugw1tbkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="welwrs0wp"/><path class="ucysj7t_m"/><path class="nhbi39eqa"/><path class="gugw1tbkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:car-2"} {...others} />);
}

export default Component;
