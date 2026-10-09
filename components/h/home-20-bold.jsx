import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffnzzok4k.css';
import '../../css/o/obwdsybdp.css';
import '../../css/l/lrafj40nd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ffnzzok4k"/><path class="obwdsybdp"/><path class="lrafj40nd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:home-20-bold"} {...others} />);
}

export default Component;
