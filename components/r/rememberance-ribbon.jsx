import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt9m3043v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lt9m3043v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:rememberance-ribbon"} {...others} />);
}

export default Component;
