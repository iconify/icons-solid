import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd-ix_sxa.css';
import '../../css/s/sr4vmxeka.css';
import '../../css/j/jfj7f4i1i.css';
import '../../css/p/psdlb_boe.css';
import '../../css/l/l_fyul_7f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wd-ix_sxa"><path class="sr4vmxeka"/><path class="jfj7f4i1i"/><path class="psdlb_boe"/><path class="l_fyul_7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:add-pic"} {...others} />);
}

export default Component;
