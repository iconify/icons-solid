import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljxy0pbpp.css';
import '../../css/t/t2peqlb2m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ljxy0pbpp"/><path class="t2peqlb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contract-48"} {...others} />);
}

export default Component;
