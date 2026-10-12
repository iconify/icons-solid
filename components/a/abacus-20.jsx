import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3y55cchp.css';
import '../../css/r/rkfducbyk.css';
import '../../css/v/vk46ucctf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s3y55cchp"/><path class="rkfducbyk"/><path class="vk46ucctf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:abacus-20"} {...others} />);
}

export default Component;
