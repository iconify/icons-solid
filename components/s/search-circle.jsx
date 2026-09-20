import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/so7t1th0o.css';
import '../../css/k/ky-4qbbal.css';
import '../../css/u/uahmt8bhp.css';
import '../../css/y/y_vm0dqzm.css';
import '../../css/x/xve-nmbgp.css';
import '../../css/x/xebh4pb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="so7t1th0o"/><path class="ky-4qbbal"/><path class="uahmt8bhp"/><path class="y_vm0dqzm"/><path class="xve-nmbgp"/><path class="xebh4pb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:search-circle"} {...others} />);
}

export default Component;
