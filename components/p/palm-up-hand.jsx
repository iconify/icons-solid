import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atapf5b1x.css';
import '../../css/n/ntfns8brg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="atapf5b1x"/><path class="ntfns8brg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:palm-up-hand"} {...others} />);
}

export default Component;
