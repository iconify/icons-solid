import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdz6p2bks.css';
import '../../css/c/c8s5nepqw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xdz6p2bks"/><path class="c8s5nepqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:respirator-20-bold"} {...others} />);
}

export default Component;
