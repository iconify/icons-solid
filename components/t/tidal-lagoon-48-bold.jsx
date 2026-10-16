import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhbpsw4mr.css';
import '../../css/k/k4gehdc3t.css';
import '../../css/f/fhj5w1dmw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hhbpsw4mr"/><path class="k4gehdc3t"/><path class="fhj5w1dmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-lagoon-48-bold"} {...others} />);
}

export default Component;
