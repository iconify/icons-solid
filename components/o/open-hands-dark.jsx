import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tacmy8yln.css';
import '../../css/m/m45rcbqou.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="tacmy8yln"/><path class="m45rcbqou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:open-hands-dark"} {...others} />);
}

export default Component;
