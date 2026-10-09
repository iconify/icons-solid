import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0-dfyl4d.css';
import '../../css/b/bbqv1obqs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f0-dfyl4d"/><path class="bbqv1obqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dam-20"} {...others} />);
}

export default Component;
