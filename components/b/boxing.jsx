import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/e/e4x6eqq0d.css';
import '../../css/n/nix0j7bwb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="e4x6eqq0d"/><path class="nix0j7bwb"/><line x1="11" x2="11" y1="14" y2="22"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:boxing"} {...others} />);
}

export default Component;
