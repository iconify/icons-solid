import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh_a1ub3t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wh_a1ub3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:axe-and-chipped-log"} {...others} />);
}

export default Component;
