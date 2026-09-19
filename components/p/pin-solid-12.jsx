import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot2q9jb_m.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="ot2q9jb_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:pin-solid-12"} {...others} />);
}

export default Component;
