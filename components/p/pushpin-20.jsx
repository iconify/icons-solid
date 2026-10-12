import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hluj3t1dy.css';
import '../../css/x/xejxqhq6v.css';
import '../../css/w/wxtlldbyo.css';
import '../../css/m/mxxirtauc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hluj3t1dy"/><path class="xejxqhq6v"/><path class="wxtlldbyo"/><path class="mxxirtauc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pushpin-20"} {...others} />);
}

export default Component;
