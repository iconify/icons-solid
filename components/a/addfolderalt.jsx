import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvk1p8bhd.css';

const viewBox = {"width":1025,"height":896};
const content = `<path class="rvk1p8bhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:addfolderalt"} {...others} />);
}

export default Component;
