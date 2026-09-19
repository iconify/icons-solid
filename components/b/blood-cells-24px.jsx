import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vbysqvbca.css';
import '../../css/h/hc6km55hv.css';
import '../../css/t/t42vibcgb.css';
import '../../css/r/rx7y-rb9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vbysqvbca"/><path clip-rule="evenodd" class="hc6km55hv"/><path class="t42vibcgb"/><path clip-rule="evenodd" class="rx7y-rb9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-cells-24px"} {...others} />);
}

export default Component;
