import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uu5hjdb0p.css';
import '../../css/o/o-youubmf.css';
import '../../css/k/k-5xp0p9n.css';
import '../../css/n/np4ab2bpj.css';
import '../../css/o/oih__vbqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uu5hjdb0p wm-shadow"/><path class="o-youubmf wm-shadow"/><path class="k-5xp0p9n"/><path class="np4ab2bpj"/><path class="oih__vbqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:package"} {...others} />);
}

export default Component;
