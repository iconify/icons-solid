import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zgs-ldbpd.css';
import '../../css/g/gla--0fiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zgs-ldbpd"/><path class="gla--0fiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:suit-01"} {...others} />);
}

export default Component;
