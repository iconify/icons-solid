import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1nb12b5u.css';
import '../../css/e/en62kpb-g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n1nb12b5u"/><path class="en62kpb-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:run-of-river-48"} {...others} />);
}

export default Component;
