import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrb7pj6bi.css';
import '../../css/e/ekdd0gbaq.css';

const viewBox = {"width":116.5,"height":62.2};
const content = `<path class="lrb7pj6bi"/><path class="ekdd0gbaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:russian-railways-dark"} {...others} />);
}

export default Component;
