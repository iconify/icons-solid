import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz13tcbgt.css';
import '../../css/h/h6zvdsy7j.css';
import '../../css/k/kymxsbbbz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cz13tcbgt"/><path class="h6zvdsy7j"/><path class="kymxsbbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-landing-48-bold"} {...others} />);
}

export default Component;
