import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsy3psbqo.css';
import '../../css/y/y96xizbul.css';
import '../../css/d/dm5mnub3m.css';
import '../../css/s/stqnwrr5b.css';
import '../../css/k/klrj55bht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lsy3psbqo"/><path class="y96xizbul"/><path class="dm5mnub3m"/><path class="stqnwrr5b"/><path class="klrj55bht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:archive-locker"} {...others} />);
}

export default Component;
