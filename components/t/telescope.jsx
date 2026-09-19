import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zpoau050b.css';
import '../../css/b/b_kc-wz3n.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="zpoau050b"/><path class="b_kc-wz3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:telescope"} {...others} />);
}

export default Component;
