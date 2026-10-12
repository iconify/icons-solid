import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghgg4x8rk.css';
import '../../css/y/ymi4owbyw.css';
import '../../css/t/tkcwycyff.css';
import '../../css/q/qygy3o62o.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ghgg4x8rk"/><path class="ymi4owbyw"/><path class="tkcwycyff"/><path class="qygy3o62o"/><path class="ikpbwe38b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-meter-alert-48"} {...others} />);
}

export default Component;
