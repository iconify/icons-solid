import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lpbpumbgd.css';
import '../../css/f/flp6ugnrw.css';
import '../../css/a/ajk_qvbds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="lpbpumbgd"/><circle class="flp6ugnrw"/><path class="ajk_qvbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:locate-fixed"} {...others} />);
}

export default Component;
