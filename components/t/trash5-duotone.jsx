import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/deu_htz4g.css';
import '../../css/a/at1ai5bbb.css';
import '../../css/s/su39-7f4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="deu_htz4g"/><path clip-rule="evenodd" class="at1ai5bbb"/><path class="su39-7f4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:trash5-duotone"} {...others} />);
}

export default Component;
