import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tb5ln68hg.css';
import '../../css/h/h28nogbso.css';
import '../../css/s/snrj8yb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tb5ln68hg"/><path class="h28nogbso"/><path class="snrj8yb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:group2-filled"} {...others} />);
}

export default Component;
