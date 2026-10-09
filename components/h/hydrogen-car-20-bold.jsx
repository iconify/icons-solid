import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1pfy_bym.css';
import '../../css/f/fsw4fslqf.css';
import '../../css/z/z_svvovos.css';
import '../../css/c/cxc03ab-d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s1pfy_bym"/><path class="fsw4fslqf"/><path class="z_svvovos"/><path class="cxc03ab-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-car-20-bold"} {...others} />);
}

export default Component;
