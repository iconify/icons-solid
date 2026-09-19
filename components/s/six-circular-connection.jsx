import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rtwj0brya.css';
import '../../css/a/a1smiveyc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rtwj0brya"/><path class="a1smiveyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:six-circular-connection"} {...others} />);
}

export default Component;
