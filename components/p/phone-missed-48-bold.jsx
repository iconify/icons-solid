import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny2audwvu.css';
import '../../css/l/lyhfxv6br.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ny2audwvu"/><path class="lyhfxv6br"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-missed-48-bold"} {...others} />);
}

export default Component;
