import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc_sombtl.css';
import '../../css/c/cpua5hbff.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nc_sombtl"/><path class="cpua5hbff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:hourglass"} {...others} />);
}

export default Component;
