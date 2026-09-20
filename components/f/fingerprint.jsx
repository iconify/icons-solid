import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv91rzblu.css';
import '../../css/q/qsg0-jb6l.css';
import '../../css/r/rndt1hbdt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bv91rzblu"/><path class="qsg0-jb6l"/><path class="rndt1hbdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:fingerprint"} {...others} />);
}

export default Component;
