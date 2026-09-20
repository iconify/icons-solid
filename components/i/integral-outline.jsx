import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpbunql8b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rpbunql8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:integral-outline"} {...others} />);
}

export default Component;
