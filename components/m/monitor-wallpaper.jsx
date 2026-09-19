import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_nerh3_q.css';
import '../../css/r/rdl-cintb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_nerh3_q"/><path class="rdl-cintb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:monitor-wallpaper"} {...others} />);
}

export default Component;
