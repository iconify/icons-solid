import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/p1ghqlb6z.css';
import '../../css/x/xrviejbni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="p1ghqlb6z"/><path class="xrviejbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:computer-chips-32-bit"} {...others} />);
}

export default Component;
