import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/menb0t_lm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="menb0t_lm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:hand-reaching-down"} {...others} />);
}

export default Component;
