import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqtep_s-s.css';
import '../../css/a/ayhlv9u9e.css';
import '../../css/a/a-_i7mbjj.css';
import '../../css/g/gqmf2tv2x.css';
import '../../css/k/k0dlcabab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rqtep_s-s"/><path class="ayhlv9u9e"/><path class="a-_i7mbjj"/><path class="gqmf2tv2x"/><path class="k0dlcabab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tree-palm-duotone"} {...others} />);
}

export default Component;
