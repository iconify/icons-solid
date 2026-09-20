import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_eyktb3y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u_eyktb3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:urgency-outline"} {...others} />);
}

export default Component;
