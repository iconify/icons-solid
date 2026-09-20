import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wjk7vbbyo.css';
import '../../css/r/r3ta8vl-m.css';
import '../../css/p/p0boiq_tf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wjk7vbbyo"/><path class="r3ta8vl-m"/><path class="p0boiq_tf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-progress-play-duotone"} {...others} />);
}

export default Component;
