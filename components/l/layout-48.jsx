import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htetqt6dv.css';
import '../../css/x/x_dcemb0l.css';
import '../../css/i/iye21db6v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="htetqt6dv"/><path class="x_dcemb0l"/><path class="iye21db6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:layout-48"} {...others} />);
}

export default Component;
