import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0n9q_5jv.css';
import '../../css/b/bate30btk.css';
import '../../css/r/r5k-ofblz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="o0n9q_5jv"/><path class="bate30btk"/><path clip-rule="evenodd" class="r5k-ofblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:file-dock-search-fill"} {...others} />);
}

export default Component;
