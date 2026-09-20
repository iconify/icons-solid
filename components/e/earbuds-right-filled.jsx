import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ruirgp1mv.css';
import '../../css/c/cac2avbop.css';
import '../../css/k/ka3skv-fj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ruirgp1mv"/><path class="cac2avbop"/><path clip-rule="evenodd" class="ka3skv-fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-right-filled"} {...others} />);
}

export default Component;
