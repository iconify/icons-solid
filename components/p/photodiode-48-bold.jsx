import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k697qj2pp.css';
import '../../css/a/aukopf2ea.css';
import '../../css/q/qztqjmb7f.css';
import '../../css/n/nblsbccok.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k697qj2pp"/><path class="aukopf2ea"/><path class="qztqjmb7f"/><path class="nblsbccok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:photodiode-48-bold"} {...others} />);
}

export default Component;
