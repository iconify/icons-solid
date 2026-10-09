import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmfh5sz3m.css';
import '../../css/l/llzzeg-xn.css';
import '../../css/i/ixr-80b7p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wmfh5sz3m"/><path class="llzzeg-xn"/><path class="ixr-80b7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ozone-48-bold"} {...others} />);
}

export default Component;
