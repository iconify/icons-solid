import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/ncuw7941y.css';
import '../../css/i/iccm8ccnl.css';
import '../../css/r/r2uva5b1a.css';
import '../../css/x/x0val9bto.css';
import '../../css/o/o0i6hszit.css';
import '../../css/k/kx3zikbiq.css';
import '../../css/p/p2zg_-bar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ncuw7941y wm-shadow"/><path class="iccm8ccnl"/><path class="r2uva5b1a"/><path class="x0val9bto"/><path class="o0i6hszit"/><path class="kx3zikbiq"/><path class="p2zg_-bar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-man-turban"} {...others} />);
}

export default Component;
