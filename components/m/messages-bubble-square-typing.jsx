import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lg0k71bog.css';
import '../../css/b/b4berbp7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lg0k71bog"/><path class="b4berbp7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:messages-bubble-square-typing"} {...others} />);
}

export default Component;
