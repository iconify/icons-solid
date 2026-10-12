import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifzu40bfd.css';
import '../../css/i/iyti-7bea.css';
import '../../css/h/hjhs5_6_n.css';
import '../../css/i/iqzpqgb0i.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ifzu40bfd"/><path class="iyti-7bea"/><path class="hjhs5_6_n"/><path class="iqzpqgb0i"/><path class="ikpbwe38b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-tank-alert-48"} {...others} />);
}

export default Component;
