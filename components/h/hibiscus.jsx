import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz5izrbmo.css';
import '../../css/l/l5bslikfl.css';
import '../../css/n/n9pb_ebiy.css';
import '../../css/h/hfkjk-baw.css';
import '../../css/w/wc56agvne.css';
import '../../css/t/tuw6jbcym.css';
import '../../css/e/ex97dobfd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wz5izrbmo"/><path class="l5bslikfl"/><path class="n9pb_ebiy"/><path class="hfkjk-baw"/><path class="wc56agvne"/><circle class="tuw6jbcym"/><circle class="ex97dobfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hibiscus"} {...others} />);
}

export default Component;
