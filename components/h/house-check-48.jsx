import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqmwze80o.css';
import '../../css/e/e3mo12bkj.css';
import '../../css/f/f54j4-b-y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cqmwze80o"/><path class="e3mo12bkj"/><path class="f54j4-b-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-check-48"} {...others} />);
}

export default Component;
