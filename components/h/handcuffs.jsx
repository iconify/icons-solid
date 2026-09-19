import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/djvbbrihb.css';
import '../../css/c/cdn_c2b2i.css';
import '../../css/y/y58k7bb-w.css';
import '../../css/a/ajturew0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="djvbbrihb"/><path class="cdn_c2b2i"/><circle class="y58k7bb-w"/><path class="ajturew0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:handcuffs"} {...others} />);
}

export default Component;
