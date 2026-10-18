import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn-a9rbco.css';
import '../../css/g/g0ni6vb5b.css';
import '../../css/t/t0ojj79_p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zn-a9rbco"/><path class="g0ni6vb5b"/><path class="t0ojj79_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scour-protection-20"} {...others} />);
}

export default Component;
