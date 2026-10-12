import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lkl3aubcf.css';
import '../../css/v/vlo2tvb9g.css';
import '../../css/n/nrpoi5tit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lkl3aubcf"/><path class="vlo2tvb9g"/><path class="nrpoi5tit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dna"} {...others} />);
}

export default Component;
