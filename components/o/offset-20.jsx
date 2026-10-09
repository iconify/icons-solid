import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oix55f0zb.css';
import '../../css/z/zpidxlb0a.css';
import '../../css/i/ivx8nobtg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oix55f0zb"/><path class="zpidxlb0a"/><path class="ivx8nobtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offset-20"} {...others} />);
}

export default Component;
