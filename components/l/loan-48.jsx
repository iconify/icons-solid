import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgaw34l5h.css';
import '../../css/j/jo9nlbz1l.css';
import '../../css/a/a-8czfekn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dgaw34l5h"/><path class="jo9nlbz1l"/><path class="a-8czfekn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:loan-48"} {...others} />);
}

export default Component;
