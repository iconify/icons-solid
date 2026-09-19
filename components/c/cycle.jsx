import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hz6y9rjmh.css';
import '../../css/n/nqjci9b_n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hz6y9rjmh"/><path class="nqjci9b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cycle"} {...others} />);
}

export default Component;
