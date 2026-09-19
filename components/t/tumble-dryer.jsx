import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1pa2zcme.css';
import '../../css/u/uwhgdo6-e.css';
import '../../css/j/jrw1kyc7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="q1pa2zcme"/><path class="uwhgdo6-e"/><path class="jrw1kyc7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tumble-dryer"} {...others} />);
}

export default Component;
