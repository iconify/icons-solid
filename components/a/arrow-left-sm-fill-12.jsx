import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0_hr98mf.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="p0_hr98mf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-left-sm-fill-12"} {...others} />);
}

export default Component;
