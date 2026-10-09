import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arvckpbkx.css';
import '../../css/j/jlgpfub1m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="arvckpbkx"/><path class="jlgpfub1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:umbrella-48-bold"} {...others} />);
}

export default Component;
