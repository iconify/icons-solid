import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa28rojds.css';
import '../../css/d/drfm1kb0v.css';
import '../../css/w/wgs_-ccbt.css';
import '../../css/z/z2fdcjb_g.css';
import '../../css/r/rfps5nbsr.css';
import '../../css/i/is8a6xutr.css';
import '../../css/l/l0sn27div.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pa28rojds"/><path class="drfm1kb0v"/><path class="wgs_-ccbt"/><circle class="z2fdcjb_g"/><circle class="rfps5nbsr"/><path class="is8a6xutr"/><path class="l0sn27div"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:fine-print"} {...others} />);
}

export default Component;
