import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd8fy92kx.css';
import '../../css/j/jx5rxd8gf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xd8fy92kx"/><path class="jx5rxd8gf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monitor-sync-bold"} {...others} />);
}

export default Component;
