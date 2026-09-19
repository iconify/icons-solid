import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wejbc4bey.css';
import '../../css/a/acn2_0bmj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="wejbc4bey"/><path class="acn2_0bmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:mail"} {...others} />);
}

export default Component;
