import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b09japs6m.css';
import '../../css/f/f4jgzpbkj.css';
import '../../css/u/ui5m6aceg.css';
import '../../css/p/pjld39-lt.css';
import '../../css/b/b007a5lzp.css';
import '../../css/l/lxonqyulp.css';
import '../../css/c/ct_k_8fus.css';
import '../../css/b/b1yz-08dx.css';
import '../../css/c/cj4sl9bzc.css';

const viewBox = {"width":250,"height":250};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b09japs6m"/><path clip-rule="evenodd" class="f4jgzpbkj"/><path clip-rule="evenodd" class="ui5m6aceg"/><path clip-rule="evenodd" class="pjld39-lt"/><path clip-rule="evenodd" class="b007a5lzp"/><path class="lxonqyulp"/><path clip-rule="evenodd" class="ct_k_8fus"/><path clip-rule="evenodd" class="b1yz-08dx"/><path class="cj4sl9bzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:duolingo-2024"} {...others} />);
}

export default Component;
