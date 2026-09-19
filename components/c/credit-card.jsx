import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvhch1-4t.css';
import '../../css/o/oirzc_rey.css';
import '../../css/y/y3t9q1bdx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cvhch1-4t"/><path class="oirzc_rey"/><path class="y3t9q1bdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:credit-card"} {...others} />);
}

export default Component;
