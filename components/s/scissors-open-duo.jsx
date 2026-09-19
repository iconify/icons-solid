import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw8bifcxs.css';
import '../../css/s/s63-y8bkd.css';
import '../../css/a/ajrmm7buk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cw8bifcxs"/><path clip-rule="evenodd" class="s63-y8bkd"/><path class="ajrmm7buk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scissors-open-duo"} {...others} />);
}

export default Component;
