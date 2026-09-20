import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdjxh7b1z.css';
import '../../css/u/utq4fcbnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hdjxh7b1z"/><path class="utq4fcbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:road-tunnel-bold"} {...others} />);
}

export default Component;
