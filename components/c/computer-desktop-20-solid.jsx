import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp7c5ww4y.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="tp7c5ww4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:computer-desktop-20-solid"} {...others} />);
}

export default Component;
