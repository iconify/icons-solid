import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zb2kedx8a.css';
import '../../css/b/b_mqzbbbw.css';
import '../../css/r/r6t4zeiqh.css';
import '../../css/l/lr4e9yb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zb2kedx8a"/><path class="b_mqzbbbw"/><path class="r6t4zeiqh"/><path class="lr4e9yb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-circle-line-duotone"} {...others} />);
}

export default Component;
