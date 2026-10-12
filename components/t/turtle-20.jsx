import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly7vjva2u.css';
import '../../css/s/siiy5zxln.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ly7vjva2u"/><path class="siiy5zxln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:turtle-20"} {...others} />);
}

export default Component;
