import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hpqk1yu7y.css';
import '../../css/h/hfxf2j46a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hpqk1yu7y"/><path class="hfxf2j46a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-signal"} {...others} />);
}

export default Component;
