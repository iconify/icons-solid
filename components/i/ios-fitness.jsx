import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kue-qkauh.css';
import '../../css/o/odruu0e2a.css';
import '../../css/e/epiyztb2x.css';
import '../../css/r/rguii63jw.css';
import '../../css/f/f61shx7pk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kue-qkauh"/><path class="odruu0e2a"/><path class="epiyztb2x"/><path class="rguii63jw"/><path class="f61shx7pk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-fitness"} {...others} />);
}

export default Component;
