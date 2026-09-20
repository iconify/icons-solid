import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6j7t_y7g.css';
import '../../css/o/od4citb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6j7t_y7g"/><path class="od4citb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:playlist-download-bold"} {...others} />);
}

export default Component;
