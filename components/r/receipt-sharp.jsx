import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu6zpr5jr.css';
import '../../css/c/czaquksml.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zu6zpr5jr"/><path class="czaquksml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:receipt-sharp"} {...others} />);
}

export default Component;
