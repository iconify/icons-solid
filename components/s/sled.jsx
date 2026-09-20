import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s61wtolnf.css';
import '../../css/g/gw0rxtbgf.css';
import '../../css/u/u89algnwl.css';
import '../../css/q/qnv6w8b5v.css';
import '../../css/o/o_1k7bbpq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="s61wtolnf"/><path class="gw0rxtbgf"/><path class="u89algnwl"/><path class="qnv6w8b5v"/><path class="o_1k7bbpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sled"} {...others} />);
}

export default Component;
