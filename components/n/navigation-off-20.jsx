import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z90t0b6bb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z90t0b6bb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:navigation-off-20"} {...others} />);
}

export default Component;
