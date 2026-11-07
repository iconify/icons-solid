import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo5hu07_i.css';
import '../../css/s/s7zqjx21v.css';
import '../../css/n/nyn8xjb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bo5hu07_i"/><path class="s7zqjx21v"/><path class="nyn8xjb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ladle-bold-duotone"} {...others} />);
}

export default Component;
