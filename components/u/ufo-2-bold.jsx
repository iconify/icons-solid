import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pkb-gqbkf.css';
import '../../css/p/pvz-nrbjs.css';
import '../../css/w/w63jv9baz.css';
import '../../css/l/ll913_fwt.css';
import '../../css/h/hloqhhbar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pkb-gqbkf"/><path class="pvz-nrbjs"/><path class="w63jv9baz"/><path class="ll913_fwt"/><path class="hloqhhbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-2-bold"} {...others} />);
}

export default Component;
