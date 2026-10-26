import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny81rcoir.css';
import '../../css/u/uhvxklb0v.css';
import '../../css/c/cj8el9bgc.css';
import '../../css/n/ndqhkbddo.css';
import '../../css/h/h1m7z2bog.css';

const viewBox = {"width":126.7,"height":116.85};
const content = `<path class="ny81rcoir"/><path class="uhvxklb0v"/><path class="cj8el9bgc"/><path class="ndqhkbddo"/><path class="h1m7z2bog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:kubescape"} {...others} />);
}

export default Component;
