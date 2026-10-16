import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw2mmrfxt.css';
import '../../css/p/phox42bnd.css';
import '../../css/q/qh1-sxi6o.css';
import '../../css/k/kn0wafhon.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kw2mmrfxt"/><path class="phox42bnd"/><path class="qh1-sxi6o"/><path class="kn0wafhon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screen-share-48-bold"} {...others} />);
}

export default Component;
