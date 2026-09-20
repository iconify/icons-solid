import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n_tujq0gr.css';
import '../../css/d/doadfbpxb.css';
import '../../css/x/xzi0bebzl.css';
import '../../css/u/uyn9orb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n_tujq0gr"/><path class="doadfbpxb"/><path clip-rule="evenodd" class="xzi0bebzl"/><path class="uyn9orb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cat-duotone"} {...others} />);
}

export default Component;
