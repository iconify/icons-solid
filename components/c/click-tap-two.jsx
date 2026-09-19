import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b0qz2dbdj.css';
import '../../css/g/g5g35qm2f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="b0qz2dbdj"/><path class="g5g35qm2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:click-tap-two"} {...others} />);
}

export default Component;
