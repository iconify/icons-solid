import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u2ffjhxgz.css';
import '../../css/b/bgh9y3bsn.css';
import '../../css/l/lsle5sbqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="u2ffjhxgz"/><path class="bgh9y3bsn"/><path class="lsle5sbqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lock-keyhole-open"} {...others} />);
}

export default Component;
