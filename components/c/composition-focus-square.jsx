import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r6cqg183h.css';
import '../../css/j/jsmok9b7b.css';
import '../../css/w/wqm7zyx1m.css';
import '../../css/p/p7t_lvdto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r6cqg183h"/><path class="jsmok9b7b"/><path class="wqm7zyx1m"/><path class="p7t_lvdto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:composition-focus-square"} {...others} />);
}

export default Component;
