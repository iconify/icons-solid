import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm-6ijbqa.css';
import '../../css/k/k3_wrxi7z.css';
import '../../css/d/d90gdxket.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fm-6ijbqa"/><path class="k3_wrxi7z"/><path class="d90gdxket"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jack-up-vessel-48"} {...others} />);
}

export default Component;
