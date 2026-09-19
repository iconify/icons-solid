import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shexgfo6g.css';
import '../../css/t/tvrpsqb8n.css';
import '../../css/q/qxtq60bcj.css';
import '../../css/t/twamd5bhj.css';
import '../../css/j/j7khqpb0t.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="shexgfo6g"/><path class="tvrpsqb8n"/><path class="qxtq60bcj"/><path class="twamd5bhj"/><path class="j7khqpb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:radio-waves"} {...others} />);
}

export default Component;
