import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tznuv8z9k.css';
import '../../css/g/gzx-mvbqo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="tznuv8z9k"/><path class="gzx-mvbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cycle-arrow"} {...others} />);
}

export default Component;
