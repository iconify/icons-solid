import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4fb2tf6s.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="t4fb2tf6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:markup-stroke-12"} {...others} />);
}

export default Component;
