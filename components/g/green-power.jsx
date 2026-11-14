import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uyzcsebgw.css';
import '../../css/x/x79mmtbbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uyzcsebgw"/><path class="x79mmtbbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:green-power"} {...others} />);
}

export default Component;
