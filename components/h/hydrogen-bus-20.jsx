import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mneset-vt.css';
import '../../css/i/iha57zbze.css';
import '../../css/x/xrneb2bxe.css';
import '../../css/j/j2xr3seuj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mneset-vt"/><path class="iha57zbze"/><path class="xrneb2bxe"/><path class="j2xr3seuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-bus-20"} {...others} />);
}

export default Component;
