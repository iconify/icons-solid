import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tja7qfb6u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tja7qfb6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:number-outline"} {...others} />);
}

export default Component;
