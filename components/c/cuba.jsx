import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlhn8ybms.css';
import '../../css/k/k1cse-ckm.css';
import '../../css/i/ik5eqpb1c.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="vlhn8ybms"/><path class="k1cse-ckm"/><path class="ik5eqpb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:cuba"} {...others} />);
}

export default Component;
