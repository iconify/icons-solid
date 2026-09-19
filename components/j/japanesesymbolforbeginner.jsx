import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odn0cubmr.css';
import '../../css/k/kbgn2obeo.css';
import '../../css/f/fnb9a-75o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="odn0cubmr"/><path class="kbgn2obeo"/><path class="fnb9a-75o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:japanesesymbolforbeginner"} {...others} />);
}

export default Component;
