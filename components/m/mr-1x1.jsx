import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou-9bxqmq.css';
import '../../css/a/art0zmfvp.css';
import '../../css/t/t-8qjbbze.css';
import '../../css/p/plgq51beq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ou-9bxqmq"/><path class="art0zmfvp"/><path class="mr-st1 t-8qjbbze"/><path class="plgq51beq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mr-1x1"} {...others} />);
}

export default Component;
