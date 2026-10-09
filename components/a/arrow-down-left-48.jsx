import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uspm4fblj.css';
import '../../css/b/bq1dbsvyq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uspm4fblj"/><path class="bq1dbsvyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-left-48"} {...others} />);
}

export default Component;
