import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m745xqbnl.css';
import '../../css/w/w39-xjyzv.css';
import '../../css/s/seqz3ibjg.css';
import '../../css/d/dse73pb-j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m745xqbnl"/><path class="w39-xjyzv"/><path class="seqz3ibjg"/><path class="dse73pb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-home-20"} {...others} />);
}

export default Component;
