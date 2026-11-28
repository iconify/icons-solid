import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uc95qjbkt.css';
import '../../css/p/pypz_wuzy.css';
import '../../css/c/csqhm8b9f.css';
import '../../css/u/u-w8q3b3b.css';
import '../../css/x/x2wpal43q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uc95qjbkt"/><path class="pypz_wuzy"/><path class="csqhm8b9f"/><path class="u-w8q3b3b"/><path class="x2wpal43q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:dna"} {...others} />);
}

export default Component;
