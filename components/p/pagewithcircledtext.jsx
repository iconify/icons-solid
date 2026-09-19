import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy14xac5w.css';
import '../../css/k/kk7e--bni.css';
import '../../css/h/h382g5b3i.css';
import '../../css/k/kmjwx1vuf.css';
import '../../css/e/eyrcnxbtr.css';
import '../../css/o/olj9hdbse.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gy14xac5w"/><path class="kk7e--bni"/><path class="h382g5b3i"/><path class="kmjwx1vuf"/><path class="eyrcnxbtr"/><path class="olj9hdbse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pagewithcircledtext"} {...others} />);
}

export default Component;
