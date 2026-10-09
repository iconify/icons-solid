import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czd4skyyb.css';
import '../../css/c/cs8zgvbmz.css';
import '../../css/z/ziak3vd1i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="czd4skyyb"/><path class="cs8zgvbmz"/><path class="ziak3vd1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ozone-20"} {...others} />);
}

export default Component;
