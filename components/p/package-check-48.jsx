import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co28yzgia.css';
import '../../css/i/i0wzpzqff.css';
import '../../css/t/tifg0imgb.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="co28yzgia"/><path class="i0wzpzqff"/><path class="tifg0imgb"/><path class="z4sj3ixdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-check-48"} {...others} />);
}

export default Component;
