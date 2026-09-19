import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogp3kachq.css';
import '../../css/c/ceh3nbbjr.css';
import '../../css/n/nuph4koxg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ogp3kachq"/><path class="ceh3nbbjr"/><path class="nuph4koxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:daggerknife"} {...others} />);
}

export default Component;
