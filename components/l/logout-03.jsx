import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aua0m5btf.css';
import '../../css/p/pgvj83jcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aua0m5btf"/><path class="pgvj83jcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:logout-03"} {...others} />);
}

export default Component;
