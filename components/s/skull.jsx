import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8zjprbue.css';
import '../../css/o/o9cqsdb8n.css';
import '../../css/r/rua3i3zlo.css';
import '../../css/w/w44oc6c8f.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="m8zjprbue"/><path class="o9cqsdb8n"/><path class="rua3i3zlo"/><path class="w44oc6c8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:skull"} {...others} />);
}

export default Component;
