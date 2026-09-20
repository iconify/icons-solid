import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y05r1sudp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y05r1sudp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:front-square-outline"} {...others} />);
}

export default Component;
