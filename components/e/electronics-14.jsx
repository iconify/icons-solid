import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot8ud_bdq.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ot8ud_bdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:electronics-14"} {...others} />);
}

export default Component;
