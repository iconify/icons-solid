import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/erz4xrb_f.css';
import '../../css/d/dj0iu_m5j.css';
import '../../css/f/fhxf8rkwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="erz4xrb_f"/><path class="dj0iu_m5j"/><path class="fhxf8rkwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:office-business-card"} {...others} />);
}

export default Component;
