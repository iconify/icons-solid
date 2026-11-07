import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wui8tcbyn.css';
import '../../css/k/kh6yd2nhl.css';
import '../../css/i/i_vz0301x.css';
import '../../css/z/ziyj3ibvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wui8tcbyn"/><path class="kh6yd2nhl"/><path class="i_vz0301x"/><path class="ziyj3ibvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-6-bold"} {...others} />);
}

export default Component;
