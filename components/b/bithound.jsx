import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omo6m3bky.css';
import '../../css/n/nttd48xax.css';
import '../../css/z/zj8owxbjo.css';

const viewBox = {"width":400,"height":400};
const content = `<g class="omo6m3bky"><path class="nttd48xax"/><path class="zj8owxbjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:bithound"} {...others} />);
}

export default Component;
