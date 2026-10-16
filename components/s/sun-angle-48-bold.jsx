import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7dup-bsh.css';
import '../../css/m/mupntswkv.css';
import '../../css/c/cppppzbrr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o7dup-bsh"/><path class="mupntswkv"/><path class="cppppzbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-angle-48-bold"} {...others} />);
}

export default Component;
