import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b5h1ptb8y.css';
import '../../css/s/syhrxr0-o.css';
import '../../css/w/wwxjgoi9v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="b5h1ptb8y"/><path class="syhrxr0-o"/><path class="wwxjgoi9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:street-sign"} {...others} />);
}

export default Component;
