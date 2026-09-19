import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ammsdacwb.css';
import '../../css/e/e4mjywbbo.css';
import '../../css/t/tnw_cksns.css';
import '../../css/d/dyglo7bbt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ammsdacwb"/><path class="e4mjywbbo"/><path class="tnw_cksns"/><path class="dyglo7bbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-qr-scanner"} {...others} />);
}

export default Component;
