import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szla-yy9o.css';
import '../../css/g/g59d8ymwp.css';
import '../../css/v/vghnpubvv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="szla-yy9o"/><path class="g59d8ymwp"/><path class="vghnpubvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-sync-48"} {...others} />);
}

export default Component;
