import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsn7_zb9v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rsn7_zb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:center-horizontally-outline"} {...others} />);
}

export default Component;
