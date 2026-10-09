import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glg0ud-ue.css';
import '../../css/e/e4gy22yti.css';
import '../../css/o/oejtqxnux.css';
import '../../css/u/uge5j2d4p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="glg0ud-ue"/><path class="e4gy22yti"/><path class="oejtqxnux"/><path class="uge5j2d4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:port-48"} {...others} />);
}

export default Component;
