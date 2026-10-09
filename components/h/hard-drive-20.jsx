import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6-botbkv.css';
import '../../css/i/iih2hu12r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v6-botbkv"/><path class="iih2hu12r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hard-drive-20"} {...others} />);
}

export default Component;
