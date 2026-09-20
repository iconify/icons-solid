import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt1pn2bte.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="lt1pn2bte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:chevron-down-double"} {...others} />);
}

export default Component;
