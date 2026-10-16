import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw2mmrfxt.css';
import '../../css/p/phox42bnd.css';
import '../../css/q/q8ft2nb-w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kw2mmrfxt"/><path class="phox42bnd"/><path class="q8ft2nb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-play-48-bold"} {...others} />);
}

export default Component;
