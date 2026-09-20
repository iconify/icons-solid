import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c479rxbrg.css';
import '../../css/t/t0cgit8gt.css';
import '../../css/n/nq9zpfqqf.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/q/qmnpc1bre.css';
import '../../css/w/wb0pqqbfi.css';
import '../../css/y/yfb5z79to.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c479rxbrg"/><path class="t0cgit8gt"/><path class="nq9zpfqqf"/><g class="x8poo_bjf"><circle class="qmnpc1bre"/><path class="wb0pqqbfi"/><path class="yfb5z79to"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:squinting-face-with-tongue"} {...others} />);
}

export default Component;
