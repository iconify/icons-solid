import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohpn1fdmc.css';
import '../../css/z/zfhnnn14l.css';
import '../../css/l/l-8851zpj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ohpn1fdmc"/><path class="zfhnnn14l"/><path class="l-8851zpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pumped-hydro-48-bold"} {...others} />);
}

export default Component;
