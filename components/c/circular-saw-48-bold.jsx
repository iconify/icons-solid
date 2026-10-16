import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bydf-9bza.css';
import '../../css/f/fe7lf8b9s.css';
import '../../css/e/e54qfbcyw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bydf-9bza"/><path class="fe7lf8b9s"/><path class="e54qfbcyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:circular-saw-48-bold"} {...others} />);
}

export default Component;
