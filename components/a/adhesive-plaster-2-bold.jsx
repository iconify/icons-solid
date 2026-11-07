import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1zehub5g.css';
import '../../css/d/do_yi4-hw.css';
import '../../css/h/hyha3ublc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q1zehub5g"/><path clip-rule="evenodd" class="do_yi4-hw"/><path class="hyha3ublc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-2-bold"} {...others} />);
}

export default Component;
