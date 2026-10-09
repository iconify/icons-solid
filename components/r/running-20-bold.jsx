import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3jqfmhas.css';
import '../../css/h/hpn385b9j.css';
import '../../css/w/wyp81zbej.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k3jqfmhas"/><path class="hpn385b9j"/><path class="wyp81zbej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:running-20-bold"} {...others} />);
}

export default Component;
