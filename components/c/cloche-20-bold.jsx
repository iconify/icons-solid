import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bljjpbbly.css';
import '../../css/w/whrztoabz.css';
import '../../css/k/kai1ahz2m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bljjpbbly"/><path class="whrztoabz"/><path class="kai1ahz2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloche-20-bold"} {...others} />);
}

export default Component;
