import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obl14qb3f.css';
import '../../css/w/w0c9q2p9f.css';
import '../../css/p/p9zqumbjg.css';
import '../../css/z/zs9watbou.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="obl14qb3f"/><path class="w0c9q2p9f"/><path class="p9zqumbjg"/><path class="zs9watbou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ashim-light"} {...others} />);
}

export default Component;
