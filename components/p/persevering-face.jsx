import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfn4zobhp.css';
import '../../css/t/t--0pgbkv.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/q/qmnpc1bre.css';
import '../../css/s/sklclnbrc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xfn4zobhp"/><path class="t--0pgbkv"/><g class="x8poo_bjf"><circle class="qmnpc1bre"/><path class="sklclnbrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:persevering-face"} {...others} />);
}

export default Component;
