import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc22oabts.css';
import '../../css/b/b2k7vhb6z.css';
import '../../css/b/b_g6eybgy.css';
import '../../css/k/k565abc4m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pc22oabts"/><path class="b2k7vhb6z"/><path class="b_g6eybgy"/><circle class="k565abc4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:docsight-dark"} {...others} />);
}

export default Component;
