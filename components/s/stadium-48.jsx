import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogiazdbpv.css';
import '../../css/h/hkm130bnc.css';
import '../../css/x/xenj0gbru.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ogiazdbpv"/><path class="hkm130bnc"/><path class="xenj0gbru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stadium-48"} {...others} />);
}

export default Component;
