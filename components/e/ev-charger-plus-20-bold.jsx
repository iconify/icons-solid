import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngy164b6w.css';
import '../../css/e/ehcipclbf.css';
import '../../css/n/n02nodbdf.css';
import '../../css/d/dj13czevu.css';
import '../../css/e/evw_lacsv.css';
import '../../css/u/uh17zlbpe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ngy164b6w"/><path class="ehcipclbf"/><path class="n02nodbdf"/><path class="dj13czevu"/><path class="evw_lacsv"/><path class="uh17zlbpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-plus-20-bold"} {...others} />);
}

export default Component;
