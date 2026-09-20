import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd13973hj.css';
import '../../css/g/gu_5xob7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd13973hj"/><path class="gu_5xob7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:wifi-signal-4-bold"} {...others} />);
}

export default Component;
