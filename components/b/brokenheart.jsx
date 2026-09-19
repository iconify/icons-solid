import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrlw1ob2d.css';
import '../../css/p/p_titlbgv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xrlw1ob2d"/><path class="p_titlbgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:brokenheart"} {...others} />);
}

export default Component;
