import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vtaqe897y.css';
import '../../css/h/ha6drsb_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vtaqe897y"/><path class="ha6drsb_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:store-factory"} {...others} />);
}

export default Component;
