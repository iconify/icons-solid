import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uiqmlpp4f.css';
import '../../css/c/c8vxj1btj.css';
import '../../css/b/bwkzufb4w.css';
import '../../css/j/jxyxe1_-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uiqmlpp4f wm-shadow"/><path class="c8vxj1btj wm-shadow"/><path class="bwkzufb4w"/><path class="jxyxe1_-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:octagon-x"} {...others} />);
}

export default Component;
