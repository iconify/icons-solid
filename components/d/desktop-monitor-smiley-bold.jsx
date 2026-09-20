import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zoz24cbfm.css';
import '../../css/g/g5rkwvecy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zoz24cbfm"/><path class="g5rkwvecy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:desktop-monitor-smiley-bold"} {...others} />);
}

export default Component;
