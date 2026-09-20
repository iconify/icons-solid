import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/v/vbx_ov5ph.css';
import '../../css/h/holob1bji.css';
import '../../css/q/qul_df1so.css';
import '../../css/v/v53tpcc9b.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGTNRUpb3c"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="vbx_ov5ph"/><path class="holob1bji"/><path class="qul_df1so"/><path class="v53tpcc9b"/></g></mask></defs><circle mask="url(#SVGTNRUpb3c)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:folding-stool-circle-filled"} {...others} />);
}

export default Component;
