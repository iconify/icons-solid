import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bhrkg_bze.css';
import '../../css/l/lkun31bgv.css';
import '../../css/d/dwpgg90mz.css';
import '../../css/k/kcn133bnm.css';
import '../../css/z/zd7u6ymjl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bhrkg_bze"/><path class="lkun31bgv"/><path class="dwpgg90mz"/><path class="kcn133bnm"/><path class="zd7u6ymjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:recording-tape-bubble-circle"} {...others} />);
}

export default Component;
