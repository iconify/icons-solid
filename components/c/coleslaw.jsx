import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x12w62b5u.css';
import '../../css/d/dpnckzvte.css';
import '../../css/o/oehnk3p0l.css';
import '../../css/i/i39b3mb6w.css';
import '../../css/m/m6xj2qbhs.css';
import '../../css/u/uulgt9ngz.css';
import '../../css/l/l2gszcktu.css';
import '../../css/p/pdduibaph.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="x12w62b5u"/><path class="dpnckzvte"/><path class="oehnk3p0l"/><path class="i39b3mb6w"/><path class="m6xj2qbhs"/><path class="uulgt9ngz"/><path class="l2gszcktu"/><path class="pdduibaph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:coleslaw"} {...others} />);
}

export default Component;
