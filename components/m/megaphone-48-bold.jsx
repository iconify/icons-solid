import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjut8esur.css';
import '../../css/u/ujxou552b.css';
import '../../css/h/h02k7abwd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tjut8esur"/><path class="ujxou552b"/><path class="h02k7abwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:megaphone-48-bold"} {...others} />);
}

export default Component;
