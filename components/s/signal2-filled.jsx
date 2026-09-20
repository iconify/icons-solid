import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjq2m9bbe.css';
import '../../css/d/d0khp7tap.css';
import '../../css/u/up0hn9bsq.css';
import '../../css/i/ij65pobku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qjq2m9bbe"/><path class="d0khp7tap"/><path class="up0hn9bsq"/><path class="ij65pobku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:signal2-filled"} {...others} />);
}

export default Component;
