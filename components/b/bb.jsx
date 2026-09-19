import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/avvfdb35i.css';
import '../../css/b/bgs-3wb5e.css';
import '../../css/z/zrjmoujkm.css';
import '../../css/k/k15qmubyq.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="avvfdb35i"/><path class="bgs-3wb5e"/><path class="zrjmoujkm"/><path class="k15qmubyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:bb"} {...others} />);
}

export default Component;
