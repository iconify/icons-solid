import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0y49ybbx.css';
import '../../css/e/ecfpntb8u.css';
import '../../css/e/ehob8bc4v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n0y49ybbx"/><path class="ecfpntb8u"/><path class="ehob8bc4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pcb-48"} {...others} />);
}

export default Component;
