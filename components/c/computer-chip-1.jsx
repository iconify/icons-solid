import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_poprf4q.css';
import '../../css/a/a03_d6cpm.css';
import '../../css/b/brb3jq8_w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o_poprf4q"/><path class="a03_d6cpm"/><path class="brb3jq8_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:computer-chip-1"} {...others} />);
}

export default Component;
