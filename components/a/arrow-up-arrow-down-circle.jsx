import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/helklwb1r.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="helklwb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:arrow-up-arrow-down-circle"} {...others} />);
}

export default Component;
