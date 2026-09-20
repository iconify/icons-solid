import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvt79nbzu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yvt79nbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:dome-with-crescent-moon-and-star-and-planet"} {...others} />);
}

export default Component;
