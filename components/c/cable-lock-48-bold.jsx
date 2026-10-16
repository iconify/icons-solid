import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0v50k2an.css';
import '../../css/x/xwaa6bbbm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t0v50k2an"/><path class="xwaa6bbbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-lock-48-bold"} {...others} />);
}

export default Component;
