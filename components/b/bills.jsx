import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g5fj2gb9b.css';
import '../../css/s/s1kzwjbvm.css';
import '../../css/d/dh_uqzb2b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g5fj2gb9b"/><path class="s1kzwjbvm"/><path clip-rule="evenodd" class="dh_uqzb2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:bills"} {...others} />);
}

export default Component;
