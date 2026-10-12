import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5dj6cczh.css';
import '../../css/s/sbasrbbib.css';
import '../../css/a/a80_5ohhu.css';
import '../../css/q/qgubfwrfh.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l5dj6cczh"/><path class="sbasrbbib"/><path class="a80_5ohhu"/><path class="qgubfwrfh"/><path class="z4sj3ixdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pylon-check-48"} {...others} />);
}

export default Component;
