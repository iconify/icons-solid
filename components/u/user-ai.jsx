import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qd7gv945m.css';
import '../../css/b/bny19rbcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qd7gv945m"/><path class="bny19rbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-ai"} {...others} />);
}

export default Component;
