import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjvtktbiw.css';
import '../../css/p/ptnacib2z.css';
import '../../css/j/jqi51rbiv.css';
import '../../css/l/l7flxycbe.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="bjvtktbiw clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 ptnacib2z"/><path class="clr-i-outline clr-i-outline-path-3 jqi51rbiv"/><path class="clr-i-outline clr-i-outline-path-4 l7flxycbe"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:align-left-text-line"} {...others} />);
}

export default Component;
