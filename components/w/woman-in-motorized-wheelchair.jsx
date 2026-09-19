import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b105wdqzl.css';
import '../../css/n/nuoq-_b5c.css';
import '../../css/r/r5t06ob6v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="b105wdqzl"/><path class="nuoq-_b5c"/><path class="r5t06ob6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-in-motorized-wheelchair"} {...others} />);
}

export default Component;
