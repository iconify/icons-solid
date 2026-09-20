import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs7w7kbfr.css';
import '../../css/w/wp17s5bha.css';
import '../../css/r/ref5yimac.css';

const viewBox = {"width":1081,"height":309};
const content = `<path class="qs7w7kbfr"/><path clip-rule="evenodd" class="wp17s5bha"/><path class="ref5yimac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:alpaca-dark"} {...others} />);
}

export default Component;
