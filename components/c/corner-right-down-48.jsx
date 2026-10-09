import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4zhywu2u.css';
import '../../css/s/sbj00_4pw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p4zhywu2u"/><path class="sbj00_4pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-right-down-48"} {...others} />);
}

export default Component;
