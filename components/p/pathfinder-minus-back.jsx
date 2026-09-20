import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/ha04ivbbx.css';
import '../../css/c/cmauxuc4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ha04ivbbx"/><path class="cmauxuc4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pathfinder-minus-back"} {...others} />);
}

export default Component;
