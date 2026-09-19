import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/symc4kb7p.css';
import '../../css/n/n7ijnpbfo.css';
import '../../css/f/fna-v2b9n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="symc4kb7p"/><path class="n7ijnpbfo"/><path class="fna-v2b9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:top-hat"} {...others} />);
}

export default Component;
