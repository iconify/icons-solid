import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r9eexsbnf.css';
import '../../css/o/oq0cuwb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r9eexsbnf"/><path class="oq0cuwb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-account"} {...others} />);
}

export default Component;
