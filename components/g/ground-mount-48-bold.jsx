import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu2obeb0g.css';
import '../../css/p/p8dn0lt6q.css';
import '../../css/d/d6cvwtbsp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mu2obeb0g"/><path class="p8dn0lt6q"/><path class="d6cvwtbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ground-mount-48-bold"} {...others} />);
}

export default Component;
