import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6_co0ppv.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6_co0ppv"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:graph-outline"} {...others} />);
}

export default Component;
