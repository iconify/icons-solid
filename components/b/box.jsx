import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot_iz2bwh.css';

const viewBox = {"width":704,"height":1000};
const content = `<path class="ot_iz2bwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:box"} {...others} />);
}

export default Component;
