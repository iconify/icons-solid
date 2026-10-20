import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th_2c0ilx.css';
import '../../css/n/nv4ijsbik.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="th_2c0ilx"/><path class="nv4ijsbik"/><path class="z4sj3ixdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-check-48"} {...others} />);
}

export default Component;
