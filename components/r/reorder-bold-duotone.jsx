import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv_hji6de.css';
import '../../css/i/ihytzob7q.css';
import '../../css/a/a06xqyb5h.css';
import '../../css/u/uggadp-bv.css';
import '../../css/a/adh5jlbah.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv_hji6de"/><path class="ihytzob7q"/><path class="a06xqyb5h"/><path class="uggadp-bv"/><path class="adh5jlbah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-bold-duotone"} {...others} />);
}

export default Component;
