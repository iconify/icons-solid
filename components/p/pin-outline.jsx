import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mljob0-zg.css';
import '../../css/f/fs2axpb2l.css';
import '../../css/s/sq5vlkbrq.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="mljob0-zg"/><path class="fs2axpb2l"/><circle class="sq5vlkbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:pin-outline"} {...others} />);
}

export default Component;
