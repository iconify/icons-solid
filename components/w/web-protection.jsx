import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o0fxx-bib.css';
import '../../css/e/ex176x73p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o0fxx-bib"/><path class="ex176x73p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:web-protection"} {...others} />);
}

export default Component;
