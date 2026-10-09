import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_i86cclf.css';
import '../../css/a/an8j9_bzq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h_i86cclf"/><path class="an8j9_bzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:forward-48-bold"} {...others} />);
}

export default Component;
