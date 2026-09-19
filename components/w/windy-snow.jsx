import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bngkp7yhv.css';
import '../../css/o/o9rdwyb_a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bngkp7yhv"/><path class="o9rdwyb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:windy-snow"} {...others} />);
}

export default Component;
