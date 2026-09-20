import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ui3smtbwj.css';
import '../../css/c/c--lwacub.css';
import '../../css/j/j27-k4r2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ui3smtbwj"/><path class="c--lwacub"/><path class="j27-k4r2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-minimalistic-outline"} {...others} />);
}

export default Component;
