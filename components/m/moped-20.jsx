import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krf8ry-1i.css';
import '../../css/a/ath_e_b-t.css';
import '../../css/g/gikp8uczy.css';
import '../../css/d/dbbzvkbuh.css';
import '../../css/q/qf57gfbln.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="krf8ry-1i"/><path class="ath_e_b-t"/><path class="gikp8uczy"/><path class="dbbzvkbuh"/><path class="qf57gfbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moped-20"} {...others} />);
}

export default Component;
