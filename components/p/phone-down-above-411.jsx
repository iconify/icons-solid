import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp-g6p_te.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mp-g6p_te"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:phone-down-above-411"} {...others} />);
}

export default Component;
