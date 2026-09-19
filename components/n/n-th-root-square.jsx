import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m1ajpyfbs.css';
import '../../css/f/f9l7gbbmg.css';
import '../../css/u/uztmj3dza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m1ajpyfbs"/><path class="f9l7gbbmg"/><path class="uztmj3dza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:n-th-root-square"} {...others} />);
}

export default Component;
