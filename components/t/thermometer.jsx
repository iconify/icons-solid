import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0v14dbpv.css';
import '../../css/p/pq8_tsv7i.css';
import '../../css/n/ndoef6xmk.css';
import '../../css/h/htffqxdup.css';
import '../../css/c/ca4_p0bkm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="d0v14dbpv"/><path class="pq8_tsv7i"/><path class="ndoef6xmk"/><path class="htffqxdup"/><path class="ca4_p0bkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:thermometer"} {...others} />);
}

export default Component;
