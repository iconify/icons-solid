import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c543isbeu.css';
import '../../css/o/ok1ev1wiw.css';
import '../../css/y/ysq3he5vq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c543isbeu"/><path class="ok1ev1wiw"/><path class="ysq3he5vq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:people-left"} {...others} />);
}

export default Component;
