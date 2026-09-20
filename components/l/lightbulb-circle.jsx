import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4tanacyw.css';
import '../../css/q/q73cfrbrr.css';
import '../../css/r/r05gn9bqo.css';
import '../../css/h/hikf6sb5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p4tanacyw"/><path clip-rule="evenodd" class="q73cfrbrr"/><path class="r05gn9bqo"/><path class="hikf6sb5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:lightbulb-circle"} {...others} />);
}

export default Component;
