import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu98hpkgc.css';
import '../../css/u/uu29n6b9n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mu98hpkgc"/><path class="uu29n6b9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flowchart-48"} {...others} />);
}

export default Component;
