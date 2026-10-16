import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alk5rr8yk.css';
import '../../css/b/bclccdbvo.css';
import '../../css/e/eveyughjw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="alk5rr8yk"/><path class="bclccdbvo"/><path class="eveyughjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-canopy-48-bold"} {...others} />);
}

export default Component;
