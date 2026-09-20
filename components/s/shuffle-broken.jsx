import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tdlh1ebyi.css';
import '../../css/l/laiy2jm3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tdlh1ebyi"/><path class="laiy2jm3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shuffle-broken"} {...others} />);
}

export default Component;
