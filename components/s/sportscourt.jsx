import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edp_iow0e.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="edp_iow0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:sportscourt"} {...others} />);
}

export default Component;
