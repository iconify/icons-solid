import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b79n94itr.css';
import '../../css/o/oozdlvhnc.css';
import '../../css/p/poha9717f.css';
import '../../css/u/u0-f0qbaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b79n94itr"/><path class="oozdlvhnc"/><path class="poha9717f"/><path class="u0-f0qbaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-home-outline"} {...others} />);
}

export default Component;
