import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hvkbivakx.css';
import '../../css/s/sbkjhb1yg.css';
import '../../css/n/nqg9bcbft.css';
import '../../css/g/gf20p1noh.css';
import '../../css/v/vf1o42-cw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hvkbivakx"/><path class="sbkjhb1yg"/><path class="nqg9bcbft"/><path class="gf20p1noh"/><path class="vf1o42-cw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-3-bold"} {...others} />);
}

export default Component;
