import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d83v4wwbd.css';
import '../../css/z/z35t4zboz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="d83v4wwbd"/><path class="z35t4zboz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rotation"} {...others} />);
}

export default Component;
