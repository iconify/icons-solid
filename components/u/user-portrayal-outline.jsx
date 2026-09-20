import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5ih2lb8v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x5ih2lb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:user-portrayal-outline"} {...others} />);
}

export default Component;
