import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngsvkrhta.css';
import '../../css/d/dscex6b8j.css';
import '../../css/s/sb5-4ppir.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ngsvkrhta"/><path class="dscex6b8j"/><path class="sb5-4ppir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scaffolding-48-bold"} {...others} />);
}

export default Component;
