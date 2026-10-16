import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex8t8sbzj.css';
import '../../css/n/nyjz5ihhp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ex8t8sbzj"/><path class="nyjz5ihhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:image-off-20"} {...others} />);
}

export default Component;
