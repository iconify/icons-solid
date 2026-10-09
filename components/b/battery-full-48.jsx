import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s84xoibnh.css';
import '../../css/d/dbhsu82qc.css';
import '../../css/i/i0dgocbbs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s84xoibnh"/><path class="dbhsu82qc"/><path class="i0dgocbbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-full-48"} {...others} />);
}

export default Component;
