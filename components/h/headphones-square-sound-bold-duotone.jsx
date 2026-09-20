import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cjnwjzb4c.css';
import '../../css/h/httstt_8v.css';
import '../../css/s/sz007hbki.css';
import '../../css/c/cnm11g43b.css';
import '../../css/r/r431kzbaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cjnwjzb4c"/><g clip-rule="evenodd" class="httstt_8v"><path class="sz007hbki"/><path class="cnm11g43b"/><path class="r431kzbaf"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-square-sound-bold-duotone"} {...others} />);
}

export default Component;
