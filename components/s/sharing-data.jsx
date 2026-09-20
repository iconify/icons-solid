import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/cu3fyt6mm.css';
import '../../css/g/gxwkom_rc.css';
import '../../css/d/dnqjlgdcj.css';
import '../../css/p/pimvocbrx.css';
import '../../css/c/cnetkpb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="cu3fyt6mm"/><path class="gxwkom_rc"/><path class="dnqjlgdcj"/><path class="pimvocbrx"/><path class="cnetkpb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:sharing-data"} {...others} />);
}

export default Component;
