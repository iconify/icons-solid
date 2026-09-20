import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k_949kg-n.css';
import '../../css/r/rvo3l_hzu.css';
import '../../css/q/qhnqewbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k_949kg-n"/><path class="rvo3l_hzu"/><path class="qhnqewbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:database-2"} {...others} />);
}

export default Component;
