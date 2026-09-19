import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w9udkpbpg.css';
import '../../css/b/bp8sdacqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w9udkpbpg"/><path class="bp8sdacqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chair-barber"} {...others} />);
}

export default Component;
