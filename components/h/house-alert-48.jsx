import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqmwze80o.css';
import '../../css/e/e3mo12bkj.css';
import '../../css/n/n8-5n64ef.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cqmwze80o"/><path class="e3mo12bkj"/><path class="n8-5n64ef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-alert-48"} {...others} />);
}

export default Component;
