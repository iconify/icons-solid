import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as0w28onq.css';
import '../../css/t/twf8fpbac.css';
import '../../css/v/v8mm5-b4t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="as0w28onq"/><path clip-rule="evenodd" class="twf8fpbac"/><path class="v8mm5-b4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-africa-bold"} {...others} />);
}

export default Component;
