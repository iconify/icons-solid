import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pns9tc5hu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pns9tc5hu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:earbuds"} {...others} />);
}

export default Component;
