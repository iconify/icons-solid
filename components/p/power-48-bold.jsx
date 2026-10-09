import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbytv9biz.css';
import '../../css/i/ifxacxt9v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dbytv9biz"/><path class="ifxacxt9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-48-bold"} {...others} />);
}

export default Component;
