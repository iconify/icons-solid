import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc8-4tb2b.css';
import '../../css/l/l-_1mtbvg.css';
import '../../css/q/q2-__fzdc.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gc8-4tb2b"/><path class="l-_1mtbvg"/><path class="q2-__fzdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:left-square-twotone"} {...others} />);
}

export default Component;
