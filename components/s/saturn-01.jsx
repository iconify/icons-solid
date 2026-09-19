import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/to0mp9xmp.css';
import '../../css/l/le01h4bll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="to0mp9xmp"/><path class="le01h4bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:saturn-01"} {...others} />);
}

export default Component;
