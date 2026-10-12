import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz-ftvbge.css';
import '../../css/k/kespe5bzf.css';
import '../../css/a/aye8s_zkm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cz-ftvbge"/><path class="kespe5bzf"/><path class="aye8s_zkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layers-filled"} {...others} />);
}

export default Component;
