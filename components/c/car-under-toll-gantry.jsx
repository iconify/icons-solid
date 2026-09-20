import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx8sbdbmg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dx8sbdbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:car-under-toll-gantry"} {...others} />);
}

export default Component;
