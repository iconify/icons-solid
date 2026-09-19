import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-tlr5n-v.css';
import '../../css/y/ywjn0acze.css';
import '../../css/j/ju-k3ebwv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="i-tlr5n-v"/><path class="ywjn0acze"/><path class="ju-k3ebwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:arrow-keys"} {...others} />);
}

export default Component;
