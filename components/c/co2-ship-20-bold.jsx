import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5uwqqndl.css';
import '../../css/a/a318uacfc.css';
import '../../css/u/ujn-tbcgw.css';
import '../../css/q/qcdgrwbvv.css';
import '../../css/n/nkzil-o-s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o5uwqqndl"/><path class="a318uacfc"/><path class="ujn-tbcgw"/><path class="qcdgrwbvv"/><path class="nkzil-o-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-ship-20-bold"} {...others} />);
}

export default Component;
