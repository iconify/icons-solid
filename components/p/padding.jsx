import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-sxi_gcz.css';
import '../../css/v/v1c18gb3w.css';
import '../../css/j/jy42i8bgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d-sxi_gcz"/><path class="v1c18gb3w"/><path class="jy42i8bgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:padding"} {...others} />);
}

export default Component;
