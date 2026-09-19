import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z-lw6rbxb.css';
import '../../css/u/u9ousftuv.css';
import '../../css/p/p-psffbzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z-lw6rbxb"/><path class="u9ousftuv"/><path class="p-psffbzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tools"} {...others} />);
}

export default Component;
