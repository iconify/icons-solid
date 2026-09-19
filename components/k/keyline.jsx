import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i5hd2ab8w.css';
import '../../css/z/z2-swz8vq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="i5hd2ab8w"/><path class="z2-swz8vq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:keyline"} {...others} />);
}

export default Component;
