import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvdded8zf.css';
import '../../css/n/nm0j_eisa.css';
import '../../css/h/hp8p1qxmm.css';
import '../../css/v/vkfkgacfm.css';
import '../../css/a/asc4-fm2e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fvdded8zf"/><path class="nm0j_eisa"/><path class="hp8p1qxmm"/><path class="vkfkgacfm"/><path class="asc4-fm2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermostat-check-20-bold"} {...others} />);
}

export default Component;
