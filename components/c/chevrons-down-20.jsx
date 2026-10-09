import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/deisahb9j.css';
import '../../css/b/bfngflyuv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="deisahb9j"/><path class="bfngflyuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-down-20"} {...others} />);
}

export default Component;
